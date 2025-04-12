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
import { ArrowRight, Link2 } from "lucide-react";

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
                        <div className="flex flex-col aspect-video rounded-xl p-6">
                            <h1 className="font-bold text-zinc-800">Trabalho</h1>
                            <Separator orientation="horizontal" className="my-2" />
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="group flex h-7 w-full items-center justify-center gap-2 p-4 text-muted-foreground bg-transparent hover:bg-gray-100 text-[13px] cursor-pointer"
                                >
                                    <Link2 className="h-4 w-4 group-hover:text-blue-600" />
                                    <p className=" text-zinc-800 font-medium whitespace-nowrap">Nome do link aqui</p>
                                    <p className="text-zinc-500 whitespace-nowrap overflow">https://nextjs.org/</p>

                                    <div className="ml-auto flex items-center gap-1">
                                        <button className="flex justify-center items-center gap-2 rounded-sm cursor-pointer py-0.5 px-2 bg-transparent hover:bg-white">
                                            <ArrowRight className="h-3.5 w-3.5" />
                                            <span className="font-semibold">Abrir</span>
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
