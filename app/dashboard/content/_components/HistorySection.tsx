import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

const HistorySection = ({ data }: any) => {
  if (!data)
    return (
      <Loader2Icon size={60} className="animate-spin w-full my-5 text-center" />
    );

  return (
    <Table>
      <TableHeader className="bg-gray-100">
        <TableRow>
          <TableHead className="font-bold text-base text-black w-[15%]">
            TOOLS
          </TableHead>
          <TableHead className="font-bold text-base text-black w-[30%]">
            RESULT
          </TableHead>
          <TableHead className="font-bold text-base text-black w-[10%]">
            DATE
          </TableHead>
          <TableHead className="font-bold text-base text-black w-[10%]">
            WORDS
          </TableHead>
          <TableHead className="font-bold text-base text-black w-[10%]">
            ACTION
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item: any, index: number) => {
          const showTemplate = Templates.find(
            (template: any) => template.slug == item.templateSlug
          );
          return (
            <TableRow key={`item-${index}`} className="border-b-gray-100">
              <TableCell className="font-medium">
                {showTemplate && (
                  <div className="flex gap-2 items-center">
                    <Image
                      src={showTemplate.icon}
                      alt="icon"
                      width={0}
                      height={0}
                      className="w-5 h-5 hidden md:block"
                    />
                    <p className="line-clamp-2 md:line-clamp-none">
                      {showTemplate.name}
                    </p>
                  </div>
                )}
              </TableCell>
              <TableCell className="font-medium">
                <p className="line-clamp-1 md:line-clamp-4">
                  {item.aiResponse}
                </p>
              </TableCell>
              <TableCell className="font-medium">{item.createdAt}</TableCell>
              <TableCell className="font-medium">
                {item.aiResponse.length}
              </TableCell>
              <TableCell className="text-primary font-medium">
                <Button
                  variant={"ghost"}
                  onClick={() => {
                    navigator.clipboard.writeText(item.aiResponse);
                  }}
                  className="cursor-pointer w-fit"
                >
                  Copy
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default HistorySection;
