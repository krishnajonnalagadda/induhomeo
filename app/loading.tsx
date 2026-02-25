import { Loader } from "@/components/Loader";

export default function RootLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Loader />
    </div>
  );
}
