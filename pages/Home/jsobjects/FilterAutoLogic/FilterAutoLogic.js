export default {
  getFullMonth() {
    const data = GetLatestMonthYear.data;
    if (!data || data.length === 0) return null;

    const year = data[0]["Year"];
    const month = data[0]["Month"]; // Assumes format YYYY-MM

    return `${month}`; // already in format like '2024-06'
  }
}
