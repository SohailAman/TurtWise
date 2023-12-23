import QueryTable from "../../components/projects/QueryTable";
import Scans from "../../components/projects/Scans";
import VulnerabilityTrace from "../../components/projects/VulnerabilityTrace";

const Project = () => {
  return (
    <div>
      <Scans />
      <QueryTable />
      <VulnerabilityTrace/>
    </div>
  );
};

export default Project;
