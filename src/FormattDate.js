export function formatDate1(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, '0');
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

  return `${day} ${month}, ${formattedHour}:${minute}${ampm}`;
}

export function formatDate2(dateString) {
  const date = new Date(dateString);
  const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, '0');
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

  return `${dayOfWeek} ${month} ${day}, ${year} | ${formattedHour}:${minute}${ampm}`;
}

console.log(formatDate1("2025-12-08T00:13:42.908Z")); 
// Output: 8 Dec, 12:13 AM

console.log(formatDate2("2025-12-07T19:41:42.908Z")); 
// Output: Sunday December 7, 2025|7:41PM

export function groupTransactionsByDate(transactions) {
  const grouped = {};

  transactions.forEach(tx => {
    const date = new Date(tx.createdAt).toDateString(); 
    // Example: "Mon Jan 20 2025"

    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(tx);
  });

  return grouped;
}

