import format from "date-fns/format";


export default function formatDate(date) {
 return format(new Date(date), 'dd/MM/yyyy');
}
