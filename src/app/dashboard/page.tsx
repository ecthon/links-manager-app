import { AppSidebar } from "../../components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link2, PenBox, Trash } from "lucide-react";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="flex flex-col aspect-video rounded-xl bg-muted/50 p-6">
              <h1 className="font-bold text-zinc-800">Trabalho</h1>
              <Separator orientation="horizontal" className="my-2" />
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="group flex h-7 w-full items-center justify-center gap-2 rounded-md p-4 text-muted-foreground bg-transparent hover:bg-zinc-100 text-[13px] cursor-pointer"
                >
                  <Link2 className="h-4 w-4 group-hover:text-blue-600" />
                  <p className=" text-zinc-800 font-medium">Next.js</p>
                  <p className="text-zinc-500">https://nextjs.org/</p>

                  <div className="ml-auto flex items-center gap-1">
                    <button className="rounded-sm cursor-pointer p-1 hover:border-zinc-200 border border-transparent">
                      <PenBox className="h-4 w-4 text-transparent group-hover:text-zinc-400 grou-hover:text-muted-foreground" />
                    </button>
                    <button className="rounded-sm cursor-pointer p-1 hover:border-zinc-200 border border-transparent">
                      <Trash className="h-4 w-4 text-transparent group-hover:text-zinc-400 grou-hover:text-muted-foreground" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
