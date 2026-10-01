/**
 * 将任意值按纯原文转义后再插入 HTML 模板。
 *
 * 页面所有 HTML 均通过模板字符串 + innerHTML 组装，任何来自用户输入
 * （觉察笔记、负熵事件名称等）或后端/本地缓存旧记录的字段，在插值前
 * 都必须经过本函数处理，确保尖括号、引号等字符只按文本显示，既不会
 * 破坏排版，也不会被浏览器当作标签或事件属性执行。
 *
 * 转义发生在渲染层，因此对修复前已经存入数据库的旧记录同样生效。
 */
export function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return '';

  return String(value).replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#39;';
      default:
        return ch;
    }
  });
}
