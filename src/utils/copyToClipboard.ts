export const copyToClipboard = () => {
  this.textArea.select();
  document.execCommand('copy');
}