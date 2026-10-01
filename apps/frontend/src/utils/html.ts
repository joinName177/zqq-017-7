/**
 * HTML 转义工具：将用户输入渲染进 HTML 字符串前统一转义，
 * 保证任何输入都只按原文展示，不会被解析为标签或属性。
 * 同时覆盖文本节点与双引号属性两种上下文。
 */
const HTML_ESCAPE_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return '';
  return String(value).replace(/[&<>"']/g, (ch) => HTML_ESCAPE_MAP[ch] as string);
}
