import Search from "../../assets/img/search.svg";
import Plus from "../../assets/img/plus.svg";
import Opcoes from "../../assets/img/opcoes.svg";
import Button from "../../components/Button";

const TitleTable = [
  { title: "Nome do evento", span: 2 },
  { title: "Total de equipes", span: 1 },
  { title: "Status", span: 1 },
  { title: "Data", span: 1 },
  { title: "", span: 1 },
]

const Table = [
  {
    name: "Clube do Laço Coração Pantaneiro",
    teams: 10,
    status: "Ativo",
    date: "01/01/2024",
  },
  {
    name: "Curso de programação avançada",
    teams: 15,
    status: "Cancelado",
    date: "15/12/2023",
  },
];
export default function Eventos() {
  return (
    <div>
      <h1 className="text-[#CC6237] text-[20px] font-bold mb-8">Todos eventos</h1>
      <div className="bg-white p-5 rounded-[10px] border border-[#09428F17]">
        <div className="flex items-center justify-end gap-2.5 py-2">
          <div className="relative flex items-center">
            <input
              type="search"
              placeholder="Buscar eventos"
              name="search"
              className="py-2.5 pl-10 pr-3.5 bg-[#F6F6F6] rounded-4xl"
            />
            <img
              src={Search}
              alt="Buscar"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
            />
          </div>
          <Button icone={Plus}>Inserir novo</Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full border-collapse">
            <thead>
              <tr>
                {TitleTable.map((item, index) => (
                  <th
                    key={index}
                    colSpan={item.span}
                    className="text-left text-[#CC623750] text-sm font-medium py-2 px-4 border-b border-[#CC623715]"
                  >
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Table.map((event, index) => (
                <tr key={index} className="w-full">
                  <td className="text-[#657593] text-xs font-normal py-2 px-4 border-b border-[#CC623715]" colSpan={2}>
                    {event.name}
                  </td>
                  <td className="text-[#657593] text-xs font-normal py-2 px-4 border-b border-[#CC623715]">
                    {event.teams}
                  </td>
                  <td className="text-[#657593] text-xs font-normal py-2 px-4 border-b border-[#CC623715]">
                    <div className="flex items-center">
                      <div
                        className="w-[10px] h-[10px] mr-2 rounded-full"
                        style={{
                          backgroundColor:
                            event.status.toLowerCase() === 'ativo' ? '#4DEF00' : '#ee2400',
                        }}
                      ></div>
                      {event.status}
                    </div>
                  </td>
                  <td className="text-[#657593] text-xs font-normal py-2 px-4 border-b border-[#CC623715]">
                    {event.date}
                  </td>
                  <td className="flex items-center justify-end py-2 px-4 border-b border-[#CC623715]">
                    <img src={Opcoes} alt="Opções" className="w-4 h-4 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end gap-2.5 py-8">
          <Button bgColor={"#F5F5F5"} textoColor={"#000000"}>
            Anterior
          </Button>
          <Button>1</Button>
          <Button bgColor={"#F5F5F5"} textoColor={"#000000"}>
            2
          </Button>
          <Button bgColor={"#F5F5F5"} textoColor={"#000000"}>
            3
          </Button>
          <Button>Próxima</Button>
        </div>
      </div>
    </div>

  );
}