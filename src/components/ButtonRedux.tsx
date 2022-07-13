import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Colors } from "../../Colors";
import { useAppDispatch } from "../../src/app/hooks";

const SIZES = ["small", "medium", "large"];
const TYPES = ["primary", "secondary", "error", "warning", "info", "success"];
const ROUNDED = ["small", "medium", "large"];

export default function ButtonRedux({
  // DESESTRUCTURATION
  onPress,
  type,
  size,
  label,
  rounded,
}) {
  const btnSize = SIZES.includes(size) ? size : "small";
  const btnType = TYPES.includes(type) ? type : "primary";
  const btnRound = ROUNDED.includes(rounded) ? rounded : "small";
  const dispatch = useAppDispatch();

  const btnSyle = {
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    width: btnSize === "large" ? "90%" : btnSize === "medium" ? 210 : "auto",
    borderRadius: btnRound === "large" ? 20 : btnRound === "medium" ? 10 : 5,
    backgroundColor:
      btnType === "primary"
        ? Colors.primary
        : btnType === "secondary"
        ? Colors.secondary
        : btnType === "error"
        ? Colors.error
        : btnType === "warning"
        ? Colors.warning
        : btnType === "info"
        ? Colors.info
        : Colors.success,
    shadowColor:
      btnType === "primary"
        ? Colors.primary
        : btnType === "secondary"
        ? Colors.secondary
        : btnType === "error"
        ? Colors.error
        : btnType === "warning"
        ? Colors.warning
        : btnType === "info"
        ? Colors.info
        : Colors.success,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
  };
  return (
    <TouchableOpacity style={btnSyle} onPress={onPress}>
      <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
