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
          <TableHead className="font-bold text-base text-black w-[25%]">
            TEMPLATE
          </TableHead>
          <TableHead className="font-bold text-base text-black w-[25%]">
            AI RESPONSE
          </TableHead>
          <TableHead className="font-bold text-base text-black w-[20%]">
            DATE
          </TableHead>
          <TableHead className="font-bold text-base text-black w-[20%]">
            WORDS
          </TableHead>
          <TableHead className="font-bold text-base text-black w-[20%]">
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
            <TableRow
              key={`item-${index}`}
              className="border-b-gray-100 hover:bg-white"
            >
              <TableCell className="font-medium">
                {showTemplate && (
                  <div className="flex gap-2">
                    <Image
                      src={showTemplate.icon}
                      alt="icon"
                      width={20}
                      height={15}
                    />
                    {showTemplate.name}
                  </div>
                )}
              </TableCell>
              <TableCell className="font-medium ">
                <p className="line-clamp-4">{item.aiResponse}</p>
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
