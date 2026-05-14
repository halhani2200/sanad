export type Status = "active" | "new" | "pending" | "ended" | "rejected";
export type Grade = "A" | "B" | "C" | "-";

export type Beneficiary = {
  id: string;
  name: string;
  status: Status;
  grade: Grade;
  region: string;
  members: number;
  lastAid: string;
  total: number;
  worker: string;
};

export const beneficiaries: Beneficiary[] = [
  { id: "1010101010", name: "محمد بن أحمد آل علي", status: "active", grade: "A", region: "صفوى", members: 5, lastAid: "12 يوم", total: 28500, worker: "عبدالله حسن" },
  { id: "1020202020", name: "فاطمة بنت عبدالله القحطاني", status: "active", grade: "B", region: "القطيف", members: 4, lastAid: "24 يوم", total: 18200, worker: "سارة محمد" },
  { id: "1030303030", name: "يوسف بن إبراهيم آل سعيد", status: "new", grade: "-", region: "صفوى", members: 6, lastAid: "—", total: 0, worker: "عبدالله حسن" },
  { id: "1040404040", name: "أم خالد العتيبي", status: "pending", grade: "C", region: "الجارودية", members: 7, lastAid: "67 يوم", total: 9100, worker: "محمد علي" },
  { id: "1050505050", name: "عائشة بنت سعد المالكي", status: "active", grade: "A", region: "صفوى", members: 8, lastAid: "5 أيام", total: 42400, worker: "سارة محمد" },
  { id: "1060606060", name: "إبراهيم بن سالم الدوسري", status: "ended", grade: "-", region: "الأوجام", members: 3, lastAid: "240 يوم", total: 13500, worker: "عبدالله حسن" },
  { id: "1070707070", name: "نورة بنت فهد الزهراني", status: "active", grade: "B", region: "صفوى", members: 5, lastAid: "18 يوم", total: 25800, worker: "محمد علي" },
  { id: "1080808080", name: "عبدالعزيز بن ناصر الشمري", status: "new", grade: "-", region: "تاروت", members: 4, lastAid: "—", total: 0, worker: "سارة محمد" },
  { id: "1090909090", name: "حصة بنت عبدالرحمن الغامدي", status: "active", grade: "A", region: "صفوى", members: 6, lastAid: "9 أيام", total: 39200, worker: "عبدالله حسن" },
  { id: "1100101010", name: "خالد بن مسعد الحربي", status: "pending", grade: "C", region: "القطيف", members: 5, lastAid: "45 يوم", total: 11800, worker: "محمد علي" },
  { id: "1110201020", name: "منيرة بنت عوض البقمي", status: "active", grade: "B", region: "الأوجام", members: 4, lastAid: "15 يوم", total: 22300, worker: "سارة محمد" },
  { id: "1120301030", name: "سلمان بن جابر العنزي", status: "active", grade: "A", region: "صفوى", members: 9, lastAid: "7 أيام", total: 51200, worker: "عبدالله حسن" },
  { id: "1130401040", name: "لطيفة بنت سليمان الحازمي", status: "rejected", grade: "-", region: "تاروت", members: 3, lastAid: "—", total: 0, worker: "محمد علي" },
  { id: "1140501050", name: "بدر بن محسن العبدلي", status: "active", grade: "C", region: "صفوى", members: 5, lastAid: "32 يوم", total: 14600, worker: "سارة محمد" },
  { id: "1150601060", name: "هند بنت تركي الرشيدي", status: "active", grade: "B", region: "الجارودية", members: 6, lastAid: "21 يوم", total: 27500, worker: "عبدالله حسن" },
];

export const statusLabels: Record<Status, string> = {
  active: "نشط",
  new: "جديد",
  pending: "معلّق",
  ended: "منتهي",
  rejected: "مرفوض",
};

export const statusBadgeClass: Record<Status, string> = {
  active: "badge-active",
  new: "badge-new",
  pending: "badge-pending",
  ended: "badge-ended",
  rejected: "badge-info",
};
