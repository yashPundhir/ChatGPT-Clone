import { ThemeToggler } from "@/components/ui/theme-toggler";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>heading text</h1>
      <span>Hello world</span>
      <div className="mt-20">{/* <ThemeToggler /> */}</div>
    </div>
  );
}
