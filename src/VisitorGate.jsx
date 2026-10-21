import { useState } from "react";
import { supabase } from "./supabaseClient";
import "./VisitorGate.css";

export default function VisitorGate({ onSuccess }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const visitorName = name.trim();
    const visitorMobile = mobile.trim();

    if (visitorName.length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[0-9]{10}$/.test(visitorMobile)) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!consent) {
      setError("Please accept the privacy notice.");
      return;
    }

    if (!supabase) {
      setError(
        "Database configuration is missing. Please contact the portfolio owner."
      );
      console.error("Supabase client is not configured.");
      return;
    }

    setLoading(true);

    try {
     const { error: databaseError } = await supabase
  .from("visitor_logs")
  .insert({
    visitor_name: visitorName.trim(),
    mobile_number: visitorMobile.trim(),
    consent_given: true,
  });

if (databaseError) {
  console.error("Supabase registration error:", databaseError);
  setError(databaseError.message);
  return;
}

      console.log("Visitor registration successful.");

      sessionStorage.setItem("visitorRegistered", "true");

      onSuccess();
    } catch (err) {
      console.error("Registration failed:", err);

      setError(
        err?.message ||
          "Registration failed. Please check your database settings and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="visitor-page">
      <div className="visitor-card">
        <div className="visitor-logo">VSMG</div>

        <p className="visitor-label">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Before we begin,
          <br />
          <span>let's get to know you.</span>
        </h1>

        <p className="visitor-description">
          Enter your details to continue to Sai Murali Ganesh's
          portfolio.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="visitor-name">Full Name</label>

          <input
            id="visitor-name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            maxLength={100}
            required
          />

          <label htmlFor="visitor-mobile">Mobile Number</label>

          <div className="visitor-phone">
            <span>+91</span>

            <input
              id="visitor-mobile"
              type="tel"
              placeholder="10-digit mobile number"
              value={mobile}
              onChange={(e) =>
                setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={10}
              required
            />
          </div>

          <label className="visitor-consent">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />

            <span>
              I agree to share my name and mobile number with
              the portfolio owner for visitor records.
            </span>
          </label>

          {error && (
            <p className="visitor-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" disabled={loading || !consent}>
            {loading ? "Registering..." : "Continue to Portfolio →"}
          </button>
        </form>

        <p className="visitor-privacy">
          Your details will not be displayed publicly.
        </p>
      </div>
    </main>
  );
}