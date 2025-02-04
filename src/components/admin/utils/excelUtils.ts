import * as XLSX from "xlsx";

interface SubscriptionData {
  date: string;
  email: string;
}

export const exportToExcel = (data: SubscriptionData[], fileName: string) => {
  const formattedData = data.map((item) => ({
    Fecha: new Date(item.date).toLocaleString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }),
    Email: item.email,
  }));

  const ws = XLSX.utils.json_to_sheet(formattedData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Suscripciones");

  XLSX.writeFile(wb, `${fileName}.xlsx`);
};
