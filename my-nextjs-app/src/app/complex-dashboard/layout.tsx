
export default function DashboardLayout({
    children,
    notifications,
    users,
    revenue,
    login
  }: {
    children: React.ReactNode;
    notifications: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    login: React.ReactNode;
  }) {
    const isLoggedIn=true;
    return isLoggedIn?(
     <>
        {children}
        <div style={{display:"flex"}}>
        <div style={{display:"flex", flexDirection:"column"}}>
        <div>{users}</div>
        <div>{revenue}</div>
        </div>
        <div style={{display:"flex",flex:1}}>{notifications}</div>
        </div>

    </>      
    ):login
  }