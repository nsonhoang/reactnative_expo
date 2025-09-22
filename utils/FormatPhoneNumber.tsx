function formatPhoneNumber(phone: string): string {
  // Loại bỏ khoảng trắng và ký tự không phải số
  let cleaned = phone.replace(/\D/g, "");

  // Nếu bắt đầu bằng 0, bỏ số 0
  if (cleaned.startsWith("0")) {
    cleaned = cleaned.substring(1);
  }

  // Thêm +84 nếu chưa có
  if (!cleaned.startsWith("84")) {
    cleaned = `84${cleaned}`;
  }

  return `+${cleaned}`;
}
export default formatPhoneNumber;
