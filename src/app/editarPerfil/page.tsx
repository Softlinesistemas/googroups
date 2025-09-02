// app/editar-perfil/page.tsx
"use client";
import { useState, useRef } from "react";
import { Camera, Save, Trash2, MapPin, Link as LinkIcon } from "react-feather";
import VinculosSociais from "@/components/VinculosSociais";
import { Label } from "@/utils/ui/Label";
import { Button } from "@/utils/ui/Button";
import GpsButton from "@/components/GpsButton";

interface Tipo {
  nome: string;
  categorias: string[];
}

export default function EditarPerfilPage() {
  // Estados para os campos do formulário
  // const [nome, setNome] = useState("Professor Agrônomo Beltrano Oliveira");
  // const [usuario, setUsuario] = useState("@profbeltranooliveira");
  // const [cidade, setCidade] = useState("Queimadas, Bahia, Brasil");
  // const [bairro, setBairro] = useState("Colina do Sol");
  // const [telefone, setTelefone] = useState("(99) 99999-9999");
  // const [email, setEmail] = useState("beltrano.oliveira@gmail.com");
  // const [cpf, setCpf] = useState("");
  // const [dataNascimento, setDataNascimento] = useState("");
  const [genero, setGenero] = useState("");
  const [racaCor, setRacaCor] = useState("");
  const [doencaCronica, setDoencaCronica] = useState<string>("");
  const [detalheDoenca, setDetalheDoenca] = useState<string>("");
  const tipos: Tipo[] = [
    {
      nome: "Câncer",
      categorias: ["Pele / Melanoma – CID C43 / D03", "Pulmão – CID C34"],
    },
    { nome: "Diabetes", categorias: ["Tipo 1", "Tipo 2"] },
    { nome: "Cardíaca", categorias: ["Arritmia", "Insuficiência cardíaca"] },
  ];

  const [tipoSelecionado, setTipoSelecionado] = useState<string>("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("");

  const categoriasDisponiveis =
    tipos.find((t) => t.nome === tipoSelecionado)?.categorias || [];

  const [apresentacao, setApresentacao] = useState(
    "Sou ENGENHEIRO AGRÔNOMO, 1996, 2023. Sua principal área de atuação é promover o desenvolvimento sustentável..."
  );
  const [atividadePrincipal, setAtividadePrincipal] = useState(
    "ENGENHARIA AGRÔNOMA"
  );
  // const [outrasAtividades, setOutrasAtividades] = useState(["GEOREFERÊNCIA"]);
  const [participaEventos, setParticipaEventos] = useState(true);
  const [armazenamentoMensagens, setArmazenamentoMensagens] =
    useState("90 dias");
  const [gpsMarcado, setGpsMarcado] = useState(false);
  const [links, setLinks] = useState([
    "https://www.gov.br/mda/pt-br",
    "https://linktr.ee/mda",
  ]);
  const [contatosAdicionais, setContatosAdicionais] = useState([
    {
      nome: "Maria Oliveira",
      usuario: "@mariaoliveira",
      telefone: "(99) 9 9999-9999",
      relacao: "Cônjuge",
    },
  ]);

  const [outrasAtividades, setOutrasAtividades] = useState<
    { tipo: string; categoria: string; modalidade: string }[]
  >([]);
  const [novaAtividade, setNovaAtividade] = useState({
    tipo: "",
    categoria: "",
    modalidade: "",
  });

  // Função para adicionar
  const adicionarAtividade = () => {
    if (
      !novaAtividade.tipo &&
      !novaAtividade.categoria &&
      !novaAtividade.modalidade
    )
      return;

    setOutrasAtividades([...outrasAtividades, novaAtividade]);
    setNovaAtividade({ tipo: "", categoria: "", modalidade: "" });
  };

  // Função para remover
  const removerAtividade = (index: number) => {
    setOutrasAtividades(outrasAtividades.filter((_, i) => i !== index));
  };

  const [outrosInteresses, setOutrosInteresses] = useState<
    { tipo: string; categoria: string; modalidade: string }[]
  >([]);
  const [novoInteresse, setNovoInteresse] = useState({
    tipo: "",
    categoria: "",
    modalidade: "",
  });

  // Função para adicionar
  const adicionarInteresse = () => {
    if (
      !novoInteresse.tipo &&
      !novoInteresse.categoria &&
      !novoInteresse.modalidade
    )
      return;

    setOutrosInteresses([...outrosInteresses, novoInteresse]);
    setNovoInteresse({ tipo: "", categoria: "", modalidade: "" });
  };

  // Função para remover
  const removerInteresse = (index: number) => {
    setOutrosInteresses(outrosInteresses.filter((_, i) => i !== index));
  };
  // const [novaAtividade, setNovaAtividade] = useState("");
  const [novoLink, setNovoLink] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Funções para manipulação dos dados
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    // Aqui você processaria a imagem selecionada
  };

  const openCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute("capture", "environment");
      fileInputRef.current.click();
    }
  };

  const openGallery = () => {
    if (fileInputRef.current) {
      fileInputRef.current.removeAttribute("capture");
      fileInputRef.current.click();
    }
  };

  const [opcoes, setOpcoes] = useState<string[]>([]);

  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(null);

  // const adicionarAtividade = () => {
  //   if (novaAtividade.trim()) {
  //     setOutrasAtividades([...outrasAtividades, novaAtividade]);
  //     setNovaAtividade("");
  //   }
  // };

  // const removerAtividade = (index: number) => {
  //   setOutrasAtividades(outrasAtividades.filter((_, i) => i !== index));
  // };

  const adicionarLink = () => {
    if (novoLink.trim()) {
      setLinks([...links, novoLink]);
      setNovoLink("");
    }
  };

  const removerLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const [escolaridade, setEscolaridade] = useState("");

  const adicionarContato = () => {
    if (contatosAdicionais.length < 3) {
      setContatosAdicionais([
        ...contatosAdicionais,
        { nome: "", usuario: "", telefone: "", relacao: "Pais/Responsável" },
      ]);
    }
  };

  const removerContato = (index: number) => {
    setContatosAdicionais(contatosAdicionais.filter((_, i) => i !== index));
  };

  const atualizarContato = (index: number, campo: string, valor: string) => {
    const novosContatos = [...contatosAdicionais];
    novosContatos[index] = { ...novosContatos[index], [campo]: valor };
    setContatosAdicionais(novosContatos);
  };

  const salvarPerfil = () => {
    alert("Perfil salvo com sucesso!");
    // Aqui você implementaria a lógica para salvar no backend
  };

  return (
    <div className="min-h-screen w-full bg-[#e7c465] mt-8">
      {/* Cabeçalho */}
      <header className="sticky top-0 bg-white shadow-sm z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-green-700">
            INFORMAÇÕES ADCIONAIS / EDITAR PERFIL
          </h1>
          <button
            onClick={salvarPerfil}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            <Save size={18} /> Salvar
          </button>
        </div>
      </header>

      {/* SEÇÃO GPS */}
      <div className="p-2 w-full justify-center">
        <Label variant="perfil" className="uppercase mb-2 block">
          Editar informações de Localização GPS
        </Label>
        <div className="p-2 flex gap-2 justify-center">
          <GpsButton />
        </div>
      </div>

      <div className="p-2 w-full">
        {/* Seção Foto de Perfil */}
        <div className="w-full mt-2">
          <Label variant="perfil">FOTO PERFIL</Label>

          {/* Foto à esquerda e botões à direita */}
          <div className="flex items-center gap-6 justify-center">
            {/* Foto quadrada */}
            <div className="w-32 h-32 rounded-lg bg-gray-200 border-2 border-dashed flex-shrink-0  border-black" />

            {/* Botões */}
            <div className="flex flex-col gap-3">
              <button
                onClick={openCamera}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg w-full mt-2 justify-center"
              >
                <Camera size={20} className="text-green-600" />
                <span className="text-sm">Selfie</span>
              </button>

              <button
                onClick={openGallery}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg w-full mt-2 justify-center"
              >
                <span className="text-green-600 font-bold text-lg">...</span>
                <span className="text-sm">Procurar</span>
              </button>
            </div>
          </div>

          {/* Input oculto */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageSelect}
          />
        </div>
        {/* Seção Gênero e Raça/Cor */}
        <div className="w-full mt-2">
          <Label variant="perfil">GÊNERO</Label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="flex flex-nowrap justify-center items-center gap-2 md:gap-2 ">
              {["Masculino", "Feminino", "LGBTQI+", "Não declarar"].map(
                (opcao) => (
                  <button
                    key={opcao}
                    onClick={() => setGenero(opcao)}
                    className={`whitespace-nowrap shrink px-3 py-2 text-[11px] leading-tight tracking-tight rounded-lg border transition-colors duration-200
                        md:px-3 md:py-2 md:text-sm
                        ${
                          genero === opcao
                            ? "bg-green-700 border-green-500 text-white hover:border-green-600" // Selecionado → Verde
                            : "bg-orange-100 border-orange-500 text-orange-700 hover:border-orange-600" // Não selecionado → Laranja
                        }`}
                  >
                    {opcao}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="w-full mt-2">
            <Label variant="perfil">RAÇA/COR</Label>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Negra", "Pardo", "Branco", "Indígena", "Amarelo"].map(
                (opcao) => (
                  <button
                    key={opcao}
                    onClick={() => setRacaCor(opcao)}
                    className={`whitespace-nowrap shrink px-3 py-2 text-[11px] leading-tight tracking-tight rounded-lg border transition-colors duration-200
                        md:px-3 md:py-2 md:text-sm
                        ${
                          racaCor === opcao
                            ? "bg-green-700 border-green-500 text-white hover:border-green-600" // Selecionado → Verde
                            : "bg-orange-100 border-orange-500 text-orange-700 hover:border-orange-600" // Não selecionado → Laranja
                        }`}
                  >
                    {opcao}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="w-full mt-2">
            <Label variant="perfil">
              PRECISA CUIDADO ESPECIAL OU TEM DOENÇA CRÔNICA?
            </Label>

            {/* Container flex para botões + input */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {["Sim", "Nao"].map((opcao) => (
                <button
                  key={opcao}
                  onClick={() => setDoencaCronica(opcao)}
                  className={`px-3 py-2 rounded-lg border transition-colors duration-200 whitespace-nowrap ${
                    doencaCronica === opcao
                      ? "bg-green-700 border-green-500 text-white hover:border-green-600"
                      : "bg-orange-100 border-orange-500 text-orange-700 hover:border-orange-600"
                  }`}
                >
                  {opcao}
                </button>
              ))}

              {/* Input ao lado dos botões */}
              <input
                type="text"
                placeholder="Especifique a doença ou cuidado"
                value={detalheDoenca}
                onChange={(e) => setDetalheDoenca(e.target.value)}
                disabled={doencaCronica !== "Sim"}
                className={`flex-1 min-w-[150px] p-3 border rounded-lg transition-colors duration-200
            ${
              doencaCronica === "Sim"
                ? "border-green-500 bg-white text-black"
                : "border-gray-300 bg-gray-100 text-gray-500"
            }`}
              />
            </div>
          </div>

          <div className="p-2">
            <Label variant="perfil">
              CUIDADO ESPECIAL OU DOENÇA CRÔNICA /{" "}
              <a href="#" className="text-blue-600 underline">
                PCD
              </a>
            </Label>

            <div className="flex flex-col gap-4">
              {/* Tipo */}
              <div className="flex items-center gap-2">
                <span className="w-24 font-semibold text-sm">Tipo</span>
                <select
                  className="flex-1 border border-black p-2 rounded-md text-sm"
                  value={tipoSelecionado}
                  onChange={(e) => {
                    setTipoSelecionado(e.target.value);
                    setCategoriaSelecionada(""); // resetar categoria ao trocar tipo
                  }}
                >
                  <option value="">Selecione...</option>
                  {tipos.map((tipo) => (
                    <option key={tipo.nome} value={tipo.nome}>
                      {tipo.nome}
                    </option>
                  ))}
                </select>
              </div>

              {/* Categoria */}
              <div className="flex items-center gap-2">
                <span className="w-24 font-semibold text-sm">Categoria</span>
                <select
                  className="flex-1 border border-black p-2 rounded-md text-sm"
                  value={categoriaSelecionada}
                  onChange={(e) => setCategoriaSelecionada(e.target.value)}
                  disabled={!tipoSelecionado}
                >
                  <option value="">Selecione...</option>
                  {categoriasDisponiveis.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Seção Apresentação */}
          <div className="p-2">
            <Label variant="perfil">APRESENTAÇÃO E INFORMAÇÕES</Label>

            <div className="relative">
              <textarea
                value={apresentacao}
                onChange={(e) => {
                  if (e.target.value.length <= 3000) {
                    setApresentacao(e.target.value);
                  }
                }}
                className="w-full mt-2 h-40 p-4 border rounded-lg resize-none border-orange-700"
                placeholder="Fale sobre você, sua formação, experiência profissional e interesses..."
              />

              {/* Contador de caracteres */}
              <span className="absolute bottom-2 right-3 text-xs text-gray-500">
                {apresentacao.length}/3000
              </span>
            </div>
          </div>

          {/* Seção Atividades Profissionais */}
          <div className="p-2">
            <Label variant="perfil">ATIVIDADES PROFISSIONAIS</Label>

            <div className="mt-4 space-y-4">
              {" "}
              {/* Espaçamento entre cada linha */}
              {/* Linha 1: Tipo */}
              <div className="flex items-center gap-2">
                <span className="w-36 font-semibold text-sm">TIPO</span>
                <input
                  type="text"
                  value={atividadePrincipal}
                  onChange={(e) => setAtividadePrincipal(e.target.value)}
                  className="flex-1 border border-black p-2 rounded-md text-sm"
                />
              </div>
              {/* Linha 2: Categoria */}
              <div className="flex items-center gap-2">
                <span className="w-36 font-semibold text-sm">CATEGORIA</span>
                <input
                  type="text"
                  value={atividadePrincipal}
                  onChange={(e) => setAtividadePrincipal(e.target.value)}
                  className="flex-1 border border-black p-2 rounded-md text-sm"
                />
              </div>
              {/* Linha 3: Modalidade */}
              <div className="flex items-center gap-2">
                <span className="w-36 font-semibold text-sm">MODALIDADE</span>
                <input
                  type="text"
                  value={atividadePrincipal}
                  onChange={(e) => setAtividadePrincipal(e.target.value)}
                  className="flex-1 border border-black p-2 rounded-md text-sm"
                />
              </div>
            </div>

            {/* Seção Outras Atividades Profissionais */}
            <div className="mt-2">
              <Label variant="perfil">OUTRAS ATIVIDADES PROFISSIONAIS</Label>

              {/* Inputs para adicionar nova atividade */}
              <div className="flex flex-col gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-36 font-semibold text-sm">TIPO</span>
                  <input
                    type="text"
                    value={novaAtividade.tipo}
                    onChange={(e) =>
                      setNovaAtividade({
                        ...novaAtividade,
                        tipo: e.target.value,
                      })
                    }
                    className="flex-1 border border-black p-2 rounded-md text-sm"
                    placeholder="Tipo"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-36 font-semibold text-sm">CATEGORIA</span>
                  <input
                    type="text"
                    value={novaAtividade.categoria}
                    onChange={(e) =>
                      setNovaAtividade({
                        ...novaAtividade,
                        categoria: e.target.value,
                      })
                    }
                    className="flex-1 border border-black p-2 rounded-md text-sm"
                    placeholder="Categoria"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-36 font-semibold text-sm">MODALIDADE</span>
                  <input
                    type="text"
                    value={novaAtividade.modalidade}
                    onChange={(e) =>
                      setNovaAtividade({
                        ...novaAtividade,
                        modalidade: e.target.value,
                      })
                    }
                    className="flex-1 border border-black p-2 rounded-md text-sm"
                    placeholder="Modalidade"
                  />
                </div>
              </div>

              {/* Botão Adicionar */}
              <div className="flex justify-end">
                <button
                  onClick={adicionarAtividade}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Adicionar
                </button>
              </div>
            </div>
            {/* Lista de atividades adicionadas em cards responsivos */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 mb-4">
              {outrasAtividades.map((atividade, index) => (
                <div
                  key={index}
                  className="bg-green-100 p-1 rounded-lg shadow flex flex-col justify-between"
                >
                  {/* Conteúdo da atividade */}
                  <div className="flex flex-col gap-1">
                    <span className="text-sm">
                      <strong>Tipo:</strong> {atividade.tipo}
                    </span>
                    <span className="text-sm">
                      <strong>Categoria:</strong> {atividade.categoria}
                    </span>
                    <span className="text-sm">
                      <strong>Modalidade:</strong> {atividade.modalidade}
                    </span>
                  </div>

                  {/* Botão remover */}
                  <Button
                    variant="danger"
                    onClick={() => removerAtividade(index)}
                    // className="self-end mt-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
            </div>

            {/* Seção Outras Atividades Profissionais */}
            <div className="mt-2">
              <Label variant="perfil">ASSUNTOS COM INTERESSE</Label>

              {/* Inputs para adicionar nova atividade */}
              <div className="flex flex-col gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-36 font-semibold text-sm">TIPO</span>
                  <input
                    type="text"
                    value={novoInteresse.tipo}
                    onChange={(e) =>
                      setNovoInteresse({
                        ...novoInteresse,
                        tipo: e.target.value,
                      })
                    }
                    className="flex-1 border border-black p-2 rounded-md text-sm"
                    placeholder="Tipo"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-36 font-semibold text-sm">CATEGORIA</span>
                  <input
                    type="text"
                    value={novoInteresse.categoria}
                    onChange={(e) =>
                      setNovoInteresse({
                        ...novoInteresse,
                        categoria: e.target.value,
                      })
                    }
                    className="flex-1 border border-black p-2 rounded-md text-sm"
                    placeholder="Categoria"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-36 font-semibold text-sm">MODALIDADE</span>
                  <input
                    type="text"
                    value={novoInteresse.modalidade}
                    onChange={(e) =>
                      setNovoInteresse({
                        ...novoInteresse,
                        modalidade: e.target.value,
                      })
                    }
                    className="flex-1 border border-black p-2 rounded-md text-sm"
                    placeholder="Modalidade"
                  />
                </div>
              </div>

              {/* Botão Adicionar */}
              <div className="flex justify-end">
                <button
                  onClick={adicionarInteresse}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Adicionar
                </button>
              </div>
            </div>
            {/* Lista de atividades adicionadas em cards responsivos */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 mb-4">
              {outrosInteresses.map((interesse, index) => (
                <div
                  key={index}
                  className="bg-green-100 p-1 rounded-lg shadow flex flex-col justify-between"
                >
                  {/* Conteúdo da interesse */}
                  <div className="flex flex-col gap-1">
                    <span className="text-sm">
                      <strong>Tipo:</strong> {interesse.tipo}
                    </span>
                    <span className="text-sm">
                      <strong>Categoria:</strong> {interesse.categoria}
                    </span>
                    <span className="text-sm">
                      <strong>Modalidade:</strong> {interesse.modalidade}
                    </span>
                  </div>

                  {/* Botão remover */}
                  <Button
                    variant="danger"
                    onClick={() => removerInteresse(index)}
                    // className="self-end mt-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Label variant="perfil" className="uppercase mb-2 block">
                escolha uma opção
              </Label>
              {["Sou Estudante", "Sou Trabalhador", "Sou Empreendedor"].map(
                (opcao) => (
                  <label
                    key={opcao}
                    className="flex items-center space-x-2 cursor-pointer text-sm md:text-base"
                  >
                    <input
                      type="checkbox"
                      checked={opcaoSelecionada === opcao}
                      onChange={() =>
                        setOpcaoSelecionada(
                          opcaoSelecionada === opcao ? null : opcao
                        )
                      }
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span>{opcao}</span>
                  </label>
                )
              )}
            </div>
          </div>
          <div className="p-2 w-full">
            <Label variant="perfil" className="uppercase">
              Qual a sua Escolaridade
            </Label>
            <select
              value={escolaridade}
              onChange={(e) => setEscolaridade(e.target.value)}
              className="w-full mt-2 p-3 border rounded-lg text-sm md:text-base focus:border-green-500 focus:ring-2 focus:ring-green-200"
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              {[
                "Sem escolaridade",
                "Educação Infantil",
                "Ensino Fundamental Incompleto",
                "Ensino Fundamental Completo",
                "Ensino Médio Incompleto",
                "Ensino Médio Completo",
                "Curso Técnico",
                "Ensino Superior Incompleto",
                "Ensino Superior Completo",
                "Pós-Graduação Lato Sensu (Especialização)",
                "Mestrado",
                "Doutorado",
                "Pós-Doutorado",
              ].map((opcao) => (
                <option key={opcao} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
          </div>
          {/* Seção Vínculos Sociais */}
          <div className="w-full mt-2">
            <Label variant="perfil">VÍNCULOS SOCIAIS</Label>

            <p className="flex !text-center !justify-center">
              PCD.GÉNERO.CULTURA.SOCIAL. SSE .MEIO AMBIENTE
            </p>

            <div className="flex w-full mt-2 justify-center mb-2">
              <VinculosSociais />
            </div>
          </div>

          {/* Seção Preferências e Configurações */}
          <div className="w-full p-2 justify-center">
            <Label
              variant="perfil"
              className="flex flex-col items-start text-left text-lg font-semibold mb-4 p-1 rounded-lg bg-gray-100"
            >
              {/* Título principal */}
              <span className="text-lg font-bold">
                PREFERÊNCIAS E CONFIGURAÇÕES
              </span>

              {/* Subtítulo / Pergunta */}
              <span className="text-base font-medium text-gray-700 mt-1">
                Deseja participara de Encontros de Grupos; Eventos, Feiras;
                Aulas e Treinos Especiais; Campeonatos e Disputas; Palestras
                etc.?
              </span>
            </Label>

            <div className="space-y-6">
              <div>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setParticipaEventos(true)}
                    className={`px-4 py-2 rounded-lg border ${
                      participaEventos
                        ? "bg-green-100 border-green-500 text-green-700"
                        : "bg-gray-100 border-gray-300"
                    }`}
                  >
                    Sim
                  </button>
                  <button
                    onClick={() => setParticipaEventos(false)}
                    className={`px-4 py-2 rounded-lg border ${
                      !participaEventos
                        ? "bg-green-100 border-green-500 text-green-700"
                        : "bg-gray-100 border-gray-300"
                    }`}
                  >
                    Não
                  </button>
                </div>
              </div>

              <div>
                <Label variant="perfil">
                  As mensagens e arquivos do CHAT ficarão salvas por:
                </Label>
                <div className="grid grid-cols-5 gap-2 md:grid-cols-4">
                  {[
                    "15 dias",
                    "30 dias",
                    "45 dias",
                    "60 dias",
                    "90 dias",
                    "120 dias",
                    "180 dias",
                    "360 dias",
                    "NUNCA",
                  ].map((opcao) => (
                    <button
                      key={opcao}
                      onClick={() => setArmazenamentoMensagens(opcao)}
                      className={`px-2 py-2 rounded-lg border text-sm ${
                        armazenamentoMensagens === opcao
                          ? "bg-green-100 border-green-500 text-green-700"
                          : "bg-gray-100 border-gray-300"
                      }`}
                    >
                      {opcao}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          

          {/* Seção Referências Geográficas */}
          <div className="w-full p-2">
            <Label variant="perfil">
              REFERÊNCIAS GEOGRÁFICAS
            </Label>
            </div>
            <div className="space-y-4">
             
            </div>
          
              <div className="w-full p-2">
                <h3 className="font-medium mb-2">LINKS</h3>
                <div className="space-y-2 mb-3">
                  {links.map((link, index) => (
                    <div key={index} className="flex items-center">
                      <LinkIcon size={16} className="text-green-600 mr-2" />
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 truncate"
                      >
                        {link}
                      </a>
                      <button
                        onClick={() => removerLink(index)}
                        className="ml-2 text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={novoLink}
                    onChange={(e) => setNovoLink(e.target.value)}
                    className="flex-1 p-2 border rounded-lg"
                    placeholder="Adicionar novo link"
                  />
                  <button
                    onClick={adicionarLink}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    Adicionar
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Sugerimos que faça o seu Linktree, é Gratuito e Fácil:
                  <a
                    href="https://linktr.ee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 ml-1"
                  >
                    https://linktr.ee/
                  </a>
                </p>
              </div>
            </div>
        

          {/* Botão Salvar */}
          <div className="sticky bottom-4 z-10">
            <button
              onClick={salvarPerfil}
              className="w-full mt-2 py-4 bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-green-700"
            >
              SALVAR PERFIL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}