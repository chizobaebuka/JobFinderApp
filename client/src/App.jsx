import { Footer, Navbar } from "./components"
import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import FindJobs from "./pages/FindJobs";
import Companies from "./pages/Companies";
import { About, AuthPage, CompanyProfile, JobDetails, UploadJob, UserProfile } from "./pages";
import { useSelector } from "react-redux";


function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="user-auth" state={{ from: location }} replace />
  )
}

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <main>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={ <Navigate to="find-jobs" replace/> } />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/companies" element={<Companies />} />
          <Route 
            path={
              user?.user?.accountType === 'seeker' 
               ? "/user-profile" : "/user-profile/:id" 
            }
            element={<UserProfile />}
          />
          <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-job"} element={<UploadJob />} />
          <Route path={"/job-detail/:id"} element={<JobDetails />} />
        </Route>

        <Route path="/about-us" element={<About />} />
        <Route path="/user-auth" element={<AuthPage />} />

      </Routes>
      {user && <Footer />}
    </main>
  )
}

export default App
