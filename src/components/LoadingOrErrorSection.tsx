import { CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export function LoadingOrErrorSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Stack flexGrow={1} justifyContent="center" alignItems="center">
      {loading ? (
        <CircularProgress />
      ) : (
        <Typography>Não é possível usar o reconhecimento de voz.</Typography>
      )}
    </Stack>
  );
}
