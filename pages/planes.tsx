import Plans from "@/src/planes/Plans";
import { usePlanes } from "@/src/planes/hooks/usePlanes";
import { LinearProgress } from "@mui/material";

// api plans
// https://mocki.io/v1/819ad59a-d91e-45dd-9820-30f2939b3e34

const planes = () => {
  const planes = usePlanes();
  return (
    <>
      {planes.isLoading && <LinearProgress />}
      {planes.isError && <div>error...</div>}
      {planes.isSuccess && <Plans plans={planes.data} />}
    </>
  );
};

export default planes;
