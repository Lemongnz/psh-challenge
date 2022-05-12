import { ContainerDetails, CustomTable, HackathonCardDetails } from "./styles";

export default function HackathonCardBottom({ hackathon, isOpen }) {
  return (
    <HackathonCardDetails
      layout
      transition={{
        delay: 0.15,
        duration: 0.3,
        type: "spring",
        bounce: 0.45,
      }}
      animate={{ y: 0 }}
      data-isopen={isOpen}
    >
      <ContainerDetails data-isopen={isOpen}>
        <CustomTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {hackathon.devs.map((dev) => (
              <tr key={dev.id}>
                <td>{dev.id}</td>
                <td>{dev.name}</td>
                <td>{dev.points}</td>
              </tr>
            ))}
          </tbody>
        </CustomTable>
      </ContainerDetails>
    </HackathonCardDetails>
  );
}
