import { redirect } from 'next/navigation';
import React from 'react';

const AdminMain = () => {
    redirect("/admin/dashboard");
};

export default AdminMain;