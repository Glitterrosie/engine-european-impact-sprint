import { Helmet } from "react-helmet-async";

const FORM_URL =
  "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=QBH3WEkfkEiD0dx77jY0_FMBtGQIOVFMt16wrIuEWShUMEZCSEdKVDlXT05OMElJQ0FTSjZBMVVLWi4u";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main className="min-h-screen pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="sr-only">Register</h1>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Registration form"
              src={FORM_URL}
              className="w-full"
              style={{ height: "calc(100vh - 10rem)", border: 0 }}
              allow="camera; microphone; geolocation"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
