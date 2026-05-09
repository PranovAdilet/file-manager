export const ROUTES = {
  home: "/",
  files: "/files",
  shared: "/shared",
  favorite: "/favorite",
  filesFromEmail: "/files-from-email",
  viewerById: (id: string) => `/viewer/${id}`,
  file: (id: string) => `/files/${id}`,
} as const;

export const navItems = [
  {
    label: "🏠 Главная",
    href: ROUTES.home,
  },
  {
    label: "📁 Мои файлы",
    href: ROUTES.files,
  },
  {
    label: "📧 Файлы из почты",
    href: ROUTES.filesFromEmail,
  },
  {
    label: "⭐ Избранные",
    href: ROUTES.favorite,
  },
];
