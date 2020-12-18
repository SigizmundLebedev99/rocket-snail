import { Item } from "./Item";

export class Style {
  strokeStyle?: string | CanvasGradient | CanvasPattern;
  fillStyle?: string | CanvasGradient | CanvasPattern;
  font?: string;
  lineWidth?: number;
  textAlign?: CanvasTextAlign;
  globalAlpha?: number;
  globalCompositeOperation?: string;
  shadowBlur?: number;
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  lineCap?: CanvasLineCap;
  lineDashOffset?: number;
  lineJoin?: CanvasLineJoin;
  miterLimit?: number;

  constructor(state: any = null) {
    if (state)
      Object.getOwnPropertyNames(state).forEach(p => {
        this[p] = state[p];
      });
  }

  Copy(style: Style) {
    Object.getOwnPropertyNames(this).forEach(p => {
      if (!this[p])
        this[p] = style[p];
    });
  }

  static GetProperty(prop: string, node: Item) {
    if (node.Style[prop])
      return node.Style[prop];
    if (node.Parent == null)
      return null;
    return this.GetProperty(prop, node.Parent)
  }

  static Apply(context: CanvasRenderingContext2D, node: Item | Style) {
    if (!(node instanceof Item)) {
      Object.getOwnPropertyNames(node).forEach(p => {
        if (node[p] && context[p])
          context[p] = node[p];
      });
      return;
    }

    if (node.Parent != null)
      this.Apply(context, node.Parent);
    Object.getOwnPropertyNames(node.Style).forEach(p => {
      if (node.Style[p] && context[p])
        context[p] = node.Style[p];
    });
  }
}