import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Animated,
  PanResponder,
} from "react-native";
import Svg, {
  Line,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  G,
  Text as SvgText,
} from "react-native-svg";
const { width } = Dimensions.get("window");

export default function StatisticsChart({ data }) {
  function createSmoothPath(points) {
    if (points.length < 2) return "";

    let d = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];

      const controlX = (current.x + next.x) / 2;

      d += `
      C
      ${controlX} ${current.y},
      ${controlX} ${next.y},
      ${next.x} ${next.y}
    `;
    }

    return d;
  }
  const values = data.values;
  const [activeIndex, setActiveIndex] = useState(2);
  const animatedX = useRef(new Animated.Value(0)).current;
  const animatedY = useRef(new Animated.Value(0)).current;
  const chartOpacity = useRef(new Animated.Value(1)).current;
  const animatedPointX = useRef(new Animated.Value(0)).current;
  const animatedPointY = useRef(new Animated.Value(0)).current;

  //const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  //const AnimatedLine = Animated.createAnimatedComponent(Line);
  const maxValue = Math.max(...values);

  const chartWidth = width - 40;
  const chartHeight = 220;

  const leftPadding = 20;
  const bottomPadding = 30;

  const graphWidth = chartWidth - leftPadding * 2;
  const graphHeight = chartHeight - bottomPadding;

  const stepX = graphWidth / (values.length - 1);

  const points = values.map((value, index) => ({
    x: leftPadding + index * stepX,
    y: graphHeight - (value / maxValue) * (graphHeight - 20),
  }));

  const linePath = createSmoothPath(points);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: (evt) => {
        const touchX = evt.nativeEvent.locationX;

        let closestIndex = 0;
        let minDistance = Number.MAX_VALUE;

        points.forEach((point, index) => {
          const distance = Math.abs(point.x - touchX);

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        });

        setActiveIndex(closestIndex);
      },
    }),
  ).current;
  const areaPath = `
${linePath}
L ${points[points.length - 1].x} ${chartHeight}
L ${points[0].x} ${chartHeight}
Z
`;
  //   const axisSteps = 4;
  const axisSteps = data.axisSteps || 4;

  const yAxisValues = Array.from({ length: axisSteps }, (_, index) => {
    return Math.round((maxValue / axisSteps) * (axisSteps - index));
  });

  const tooltipWidth = 80;
  const tooltipHeight = 44;

  const safeIndex = Math.min(activeIndex, points.length - 1);

  const currentPoint = points[safeIndex];

  const tooltipX = Math.max(
    10,
    Math.min(currentPoint.x - tooltipWidth / 2, chartWidth - tooltipWidth - 10),
  );

  const tooltipY = currentPoint.y - 70;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedX, {
        toValue: tooltipX,
        duration: 250,
        useNativeDriver: false,
      }),

      Animated.timing(animatedY, {
        toValue: tooltipY,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  }, [activeIndex]);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(chartOpacity, {
        toValue: 0,
        duration: 120,
        useNativeDriver: true,
      }),

      Animated.timing(chartOpacity, {
        toValue: 1,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start();
  }, [data]);
  useEffect(() => {
    setActiveIndex(0);
  }, [data]);
  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.chartContainer,
          {
            opacity: chartOpacity,
          },
        ]}
      >
        {" "}
        <Svg
          width={chartWidth}
          height={chartHeight}
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        >
          {yAxisValues.map((value, index) => (
            <SvgText
              key={index}
              x="0"
              y={20 + index * 50}
              fontSize="12"
              fill="#8F8F8F"
            >
              ₦{value.toLocaleString()}
            </SvgText>
          ))}
          {/* Grid Lines */}

          {Array.from({ length: axisSteps - 1 }).map((_, index) => {
            const y = ((index + 1) * graphHeight) / axisSteps;

            return (
              <Line
                key={index}
                x1={leftPadding}
                y1={y}
                x2={chartWidth}
                y2={y}
                stroke="#ECECEC"
                strokeWidth="1"
              />
            );
          })}
          {/* Gradient Definition */}
          <Defs>
            <LinearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor="#429690" stopOpacity="0.35" />
              <Stop offset="100%" stopColor="#429690" stopOpacity="0.02" />
            </LinearGradient>
          </Defs>

          {/* Area under the curve */}
          <Path d={areaPath} fill="url(#gradientFill)" />

          {/* Curve */}
          <Path
            d={linePath}
            fill="none"
            stroke="#429690"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Dashed vertical line */}
          {points.map((point, index) => (
            <G key={index}>
              {/* Dashed line */}
              {index === safeIndex && (
                <Line
                  x1={point.x}
                  y1={point.y}
                  x2={point.x}
                  y2={chartHeight}
                  stroke="#A8A8A8"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                />
              )}

              {/* Invisible touch area */}
              <Circle
                cx={point.x}
                cy={point.y}
                r="20"
                fill="transparent"
                onPress={() => setActiveIndex(index)}
              />

              {/* Outer circle */}
              {index === safeIndex && (
                <Circle
                  cx={point.x}
                  cy={point.y}
                  r="12"
                  fill="#429690"
                  opacity="0.18"
                />
              )}

              {/* Inner circle */}
              {index === safeIndex && (
                <Circle cx={point.x} cy={point.y} r="6" fill="#429690" />
              )}
            </G>
          ))}

          {/* {points.map((point, index) => (
            <Circle
              key={index}
              cx={point.x}
              cy={point.y}
              r={index === safeIndex ? 6 : 3}
              fill="#429690"
            />
          ))} */}
        </Svg>
        {/* Tooltip */}
        <Animated.View
          style={[
            styles.tooltip,
            {
              left: animatedX,
              top: animatedY,
            },
          ]}
        >
          <Text style={styles.tooltipText}>
            ₦{values[safeIndex].toLocaleString()}
          </Text>
          <View style={styles.tooltipArrow} />
        </Animated.View>
      </Animated.View>
      {/* Month Labels */}

      <View style={styles.monthRow}>
        {data.labels.map((label, index) => (
          <Pressable key={label} onPress={() => setActiveIndex(index)}>
            <Text
              style={index === safeIndex ? styles.activeMonth : styles.month}
            >
              {label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 20,
  },

  monthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -20,
  },

  month: {
    color: "#7E7E7E",
    fontSize: 13,
  },

  activeMonth: {
    color: "#2A7C76",
    fontWeight: "700",
    fontSize: 13,
  },

  chartContainer: {
    position: "relative",
  },

  tooltip: {
    position: "absolute",
    left: 88,
    top: 22,

    backgroundColor: "#F5FFFE",

    borderWidth: 1,
    borderColor: "#8ED3CC",

    paddingHorizontal: 14,
    paddingVertical: 8,

    borderRadius: 12,

    alignItems: "center",
  },

  tooltipText: {
    color: "#429690",
    fontWeight: "700",
    fontSize: 18,
  },

  //   tooltipArrow: {
  //     position: "absolute",

  //     bottom: -8,

  //     width: 14,
  //     height: 14,

  //     backgroundColor: "#F5FFFE",

  //     borderRightWidth: 1,
  //     borderBottomWidth: 1,

  //     borderColor: "#8ED3CC",

  //     transform: [{ rotate: "45deg" }],
  //   },
  tooltipArrow: {
    position: "absolute",
    bottom: -7,
    left: "80%",
    marginLeft: -7,

    width: 14,
    height: 14,

    backgroundColor: "#F5FFFE",

    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#8ED3CC",

    transform: [{ rotate: "45deg" }],
  },
});
