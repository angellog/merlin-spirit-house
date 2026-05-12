export function cleanWhatsappNumber(num: string): string {
  return num.replace(/[^0-9]/g, "");
}
