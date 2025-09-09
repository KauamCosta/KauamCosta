// Dados extraídos do seu arquivo Profile.csv
const userProfileData = {
  firstName: "Kauam",
  lastName: "da Silva Costa",
  headline: "QA Engineer | Automation | DevOps | Postman | Robot | Appium",
  summary: "Facilidade de comunicação e relacionamento interpessoal e em trabalhar em equipe. Disponibilidade de manhã e tarde. Gosto muito de tecnologia, sempre procurando aprender coisas novas, gosto da área desde mais novo, obtendo assim bastante afinidade com a TI.",
  location: "Curitiba, Paraná, Brasil",
  industry: "IT Services and IT Consulting",
  github: "KauamCosta"
};

// Componente de ícone para localização (SVG embutido)
const LocationIcon = () => (
  <svg className="w-4 h-4 text-gray-500 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.342.419.445.522.89.99 1.336 1.417l.455.428.41.366c.219.193.434.382.645.564.21.183.415.358.614.526l.138.115.143.119.1.84a1 1 0 0 0 .127.115l.182.135.1.071c.215.15.43.293.642.428a1 1 0 0 0 .97.022c.21-.133.42-.273.63-.41l.137-.087.18-.133a1 1 0 0 0 .13-.118l.1-.84.143-.12.138-.115c.2-.168.404-.343.614-.526.21-.182.426-.371.645-.564l.41-.366.455-.428c.446-.427.891-.895 1.336-1.417.115-.134.23-.274.342-.42l.12-.146.12-.183A7.992 7.992 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
  </svg>
);


const UserProfile = () => {
  const { firstName, lastName, headline, summary, location, github } = userProfileData;
  const skills = headline.split(' | ').map(skill => skill.trim());

  return (
    <div className="flex min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 items-center">
      <div className="bg-white max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="bg-[url('https://media.licdn.com/dms/image/v2/D4D16AQHgQKoqy76eEw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1683450209407?e=1760572800&v=beta&t=SBmWN1pqef-qRjSdrR61CG9Si9H_aUXP10xpPfohcis')]">
        <div className="bg-black/70 w-full h-full p-6">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Foto do GitHub */}
            <div className="flex-shrink-0">
              <img
                src={`https://github.com/${github}.png`}
                alt={`${firstName} ${lastName}`}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          
            {/* Informações Principais */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-2">{`${firstName} ${lastName}`}</h1>
              <p className="text-xl text-blue-100">{headline.split('|')[0].trim()}</p>
              <div className="flex items-center justify-center md:justify-start mt-3 text-blue-100">
                <LocationIcon />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="p-8">
          {/* Seção Sobre */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
              Sobre
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {summary}
            </p>
          </div>

          {/* Seção de Habilidades */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">
              Habilidades
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full 
                           text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;