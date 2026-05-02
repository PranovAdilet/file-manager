export type NavHref =
  | "/"
  | "/files"
  | "/shared"
  | "/favorite"
  | "/files-from-email";

export type NavItem = {
  label: string;
  href: NavHref;
};

export const navItems: NavItem[] = [
  {
    label: "🏠 Главная",
    href: "/",
  },
  {
    label: "📁 Мои файлы",
    href: "/files",
  },
  // {
  //   label: "🔗 Доступные",
  //   href: "/shared",
  // },
  {
    label: "📧 Файлы из почты",
    href: "/files-from-email",
  },
  {
    label: "⭐ Избранные",
    href: "/favorite",
  },
];
