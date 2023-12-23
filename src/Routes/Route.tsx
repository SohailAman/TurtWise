// Routes.tsx
import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import AuthLayout from "../_auth/AuthLayout";
import MainLayout from "../_root/MainLayout";

// Lazy-loaded components
const Dashboard = lazy(() => import("../_root/pages/Dashboard"));
const Project = lazy(() => import("../_root/pages/Project"));
const Arena = lazy(() => import("../_root/pages/Arena"));
const Charts = lazy(() => import("../_root/pages/Charts"));
const Logs = lazy(() => import("../_root/pages/Logs"));
const Scans = lazy(() => import("../_root/pages/Scans"));
const ScanSummary = lazy(() => import("../_root/pages/ScanSummary"));
const Sim = lazy(() => import("../_root/pages/Sim"));
const Signin = lazy(() => import("../_auth/forms/Signin"));
const Signup = lazy(() => import("../_auth/forms/Signup"));

const LoadingFallback: FC = () => (
  <div className="flex justify-center items-center w-full h-[60dvh]">
    <FadeLoader color="#000" />
  </div>
);

const AppRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Dashboard />
          </Suspense>
        }
      />

      <Route
        path="/project/*"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Project />
          </Suspense>
        }
      />
      <Route
        path="/project/arena"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Arena />
          </Suspense>
        }
      />
      <Route
        path="/project/charts"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Charts />
          </Suspense>
        }
      />
      <Route
        path="/project/logs"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Logs />
          </Suspense>
        }
      />
      <Route
        path="/project/sim"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Sim />
          </Suspense>
        }
      />

      <Route
        path="/scans"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Scans />
          </Suspense>
        }
      />
      <Route
        path="/scan-summary"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ScanSummary />
          </Suspense>
        }
      />
    </Route>

    <Route path="/auth/" element={<AuthLayout />}>
      <Route
        path="/auth/sign-in"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Signin />
          </Suspense>
        }
      />
      <Route
        path="/auth/sign-up"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <Signup />
          </Suspense>
        }
      />
    </Route>
  </Routes>
);

export default AppRoutes;
