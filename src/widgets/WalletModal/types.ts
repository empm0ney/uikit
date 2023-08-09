import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export type ConnectorId =
  | "authereum"
  | "fortmatic"
  | "frame"
  | "metamask"
  | "injected"
  | "portis"
  | "squarelink"
  | "torus"
  | "walletconnect"
  | "walletlink"
  | "bsc";

export type Login = (connectorId: ConnectorId) => void;

export interface Config {
  title: string;
  icon?: FC<SvgProps>;
  fallbackImage?: string;
  connectorId: ConnectorId;
}
