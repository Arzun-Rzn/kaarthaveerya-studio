import React, { useState } from "react";
import ArtworkUploadCard from "./ArtworkUploadCard";
import ArtEditsList from "./ArtEditsList";

const ArtworkManager = () => {
  const [refresh, setRefresh] = useState(false);
  const [editData, setEditData] = useState(null);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div>
      <ArtworkUploadCard
        onSuccess={triggerRefresh}
        editData={editData}
        clearEdit={() => setEditData(null)}
      />

      <ArtEditsList
        refresh={refresh}
        onEdit={(art) => setEditData(art)}
      />
    </div>
  );
};

export default ArtworkManager;