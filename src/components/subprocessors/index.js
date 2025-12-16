import "./subprocessors.css";

const services = [
  {
    name: "AWS",
    purpose: "Cloud infrastructure and hosting services",
    location: "United States",
    website: "https://aws.amazon.com"
  },
  {
    name: "Deepgram",
    purpose: "Speech-to-text and audio processing",
    location: "United States",
    website: "https://deepgram.com"
  },
  {
    name: "OpenAI",
    purpose: "AI language model services",
    location: "United States",
    website: "https://openai.com"
  },
  {
    name: "Grok",
    purpose: "AI language model services",
    location: "United States",
    website: "https://grok.x.ai"
  },
  {
    name: "AWS",
    purpose: "Cloud infrastructure and hosting services",
    location: "United States",
    website: "https://aws.amazon.com"
  },
  {
    name: "Deepgram",
    purpose: "Speech-to-text and audio processing",
    location: "United States",
    website: "https://deepgram.com"
  },
  {
    name: "OpenAI",
    purpose: "AI language model services",
    location: "United States",
    website: "https://openai.com"
  },
  {
    name: "Grok",
    purpose: "AI language model services",
    location: "United States",
    website: "https://grok.x.ai"
  },
  {
    name: "AWS",
    purpose: "Cloud infrastructure and hosting services",
    location: "United States",
    website: "https://aws.amazon.com"
  },
  {
    name: "Deepgram",
    purpose: "Speech-to-text and audio processing",
    location: "United States",
    website: "https://deepgram.com"
  },
  {
    name: "OpenAI",
    purpose: "AI language model services",
    location: "United States",
    website: "https://openai.com"
  },
  {
    name: "Grok",
    purpose: "AI language model services",
    location: "United States",
    website: "https://grok.x.ai"
  }
];

const SubprocessorsComponent = () => {
  return (
    <div className="SubPageWrap">
      <div className="SubPageHead">
        <h1>MeMate Subprocessors</h1>
        <span>Current as of Aug 25, 2025</span>
        <p>
          Know exactly where your data is and how it is being used.
          <br />
          MeMate subprocessors.
        </p>
      </div>

      <div className="table-wrapper">
        <table className="services-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Purpose</th>
              <th>Location</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {services.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.purpose}</td>
                <td>{item.location}</td>
                <td>
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.website}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubprocessorsComponent;
