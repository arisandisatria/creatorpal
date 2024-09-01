"use client";

import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AIModel";
import { db } from "@/utils/db";
import { AIOutputSchema } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { user } = useUser();
  const router = useRouter();
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );

  /**
   *
   */

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );

  const generateAIContent = async (formData: any) => {
    if (totalUsage >= 10000 && !userSubscription) {
      console.log("Please upgrade");
      router.push("/dashboard/billing");
      return;
    }

    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;

    const FinalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);

    setAiOutput(result?.response.text());
    await saveToDB(formData, selectedTemplate?.slug, result?.response.text());
    setLoading(false);
    setUpdateCreditUsage(Date.now());
  };

  const saveToDB = async (formData: any, slug: any, aiResponse: string) => {
    const result = await db.insert(AIOutputSchema).values({
      formData: formData || "",
      templateSlug: slug || "",
      aiResponse: aiResponse,
      createdBy: user?.primaryEmailAddress?.emailAddress || "",
      createdAt: moment().format("DD/MM/YYYY"),
    });

    console.log(result);
  };

  return (
    <div className="p-7">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => generateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
