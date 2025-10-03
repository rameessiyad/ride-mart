import { getAdmin } from "@/actions/admin";
import Header from "@/components/header";
import { notFound } from "next/navigation";
import React from "react";

const AdminLayout = async () => {
  const admin = await getAdmin();

  if (!admin.authorized) return notFound();

  return (
    <div>
      <Header isAdminPage />
    </div>
  );
};

export default AdminLayout;
