export const formatDateTime = (dateString: string): string => {
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) {
      return "Fecha inválida";
    }
  
    const formattedDate = date.toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  
    const formattedTime = date.toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  
    return `${formattedDate} ${formattedTime}hs`;
  };
  