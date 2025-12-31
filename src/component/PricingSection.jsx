import "./PricingSection.css";

const plans = [
  {
    title: "Listener",
    price: "Free",
    tagline: "For music lovers",
    features: [
      "Access to community posts",
      "Event updates",
      "Music recommendations",
      "Public jam sessions"
    ],
    highlighted: false
  },
  {
    title: "Cult Member",
    price: "₹299 / semester",
    tagline: "For active creators",
    features: [
      "All Listener benefits",
      "Priority event entry",
      "Studio jam access",
      "Artist collaborations",
      "Exclusive FMC merch discounts"
    ],
    highlighted: true
  },
  {
    title: "Core Artist",
    price: "Invite Only",
    tagline: "For serious musicians",
    features: [
      "All Cult Member benefits",
      "Headline performances",
      "Recording support",
      "Content promotion",
      "Direct FMC management access"
    ],
    highlighted: false
  }
];

export default function PricingSection() {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <span className="pricing-badge">MEMBERSHIP PLANS</span>
        <h2>Choose Your Frequency</h2>
        <p>
          Whether you listen, create, or lead — there’s a place for you in the cult.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${
              plan.highlighted ? "highlighted" : ""
            }`}
          >
            <h3>{plan.title}</h3>
            <p className="tagline">{plan.tagline}</p>
            <div className="price">{plan.price}</div>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button className="pricing-btn">
              {plan.price === "Free" ? "Join Now" : "Become a Member"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
