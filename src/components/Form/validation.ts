export const validateText = (text: string, count: number): boolean => {
  return text.length > count;
};
export const validateImg = (file: string): boolean => {
  const regexp = new RegExp(/\.(jpe?g|png|gif|svg)/i);
  return regexp.test(file);
};
