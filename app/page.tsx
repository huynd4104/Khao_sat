import styles from "./page.module.css";

type GroupCard = {
  name: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
  url: string;
  accentClass: string;
  buttonLabel: string;
};

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 5h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14L19 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 14v5H5V5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IntentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 14c1.5-3.5 8.5-3.5 10 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 10.2h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M15 10.2h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function PregnantIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4c-2.8 0-5 2.2-5 5 0 1.2.4 2.3 1.1 3.2 1 1.2 1.7 2.3 1.9 3.9.2 1.5 1.2 2.9 2.7 2.9 1.8 0 2.9-1.4 2.9-3 0-1.6.7-2.7 1.8-3.9.7-.9 1.1-2 1.1-3.1 0-2.8-2.2-5-5-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 11h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PostpartumIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 13c0-3 2.4-5 5-5s5 2 5 5v4H7v-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 8h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10.5 15.5h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.5" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 18c.7-3 3-4.5 4.5-4.5S13.3 15 14 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.5 18c.4-1.8 1.9-3 3-3 1.4 0 2.5 1.2 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const groups: GroupCard[] = [
  {
    name: "Phụ nữ có ý định mang thai",
    description: "Dành cho người đang chuẩn bị và muốn được tư vấn đúng giai đoạn trước khi mang thai.",
    tag: "Nhóm 1",
    icon: <IntentIcon />,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfKleTCv5LkxYmFaYwWzal0cC8CnlTN6nUhGOLAt5Y2RLOLsw/viewform?usp=publish-editor",
    accentClass: styles.intent,
    buttonLabel: "Mở khảo sát"
  },
  {
    name: "Phụ nữ đang mang thai",
    description: "Dành cho mẹ bầu ở bất kỳ tam cá nguyệt nào, từ theo dõi sức khỏe đến trải nghiệm chăm sóc.",
    tag: "Nhóm 2",
    icon: <PregnantIcon />,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSebWVWZBRQWzKI8TaK9NWH0Wz3od09rGP4Ht41xcuY7b9thjg/viewform?usp=publish-editor",
    accentClass: styles.pregnant,
    buttonLabel: "Mở khảo sát"
  },
  {
    name: "Phụ nữ sau sinh",
    description: "Dành cho mẹ sau sinh cần chia sẻ về phục hồi, chăm bé và hành trình sau sinh.",
    tag: "Nhóm 3",
    icon: <PostpartumIcon />,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdXokXZ2cTtEtkIs68ASo7xrLhxnR5ZwbhCmlzEuS1C-CGGIA/viewform?usp=publish-editor",
    accentClass: styles.postpartum,
    buttonLabel: "Mở khảo sát"
  },
  {
    name: "Nhóm thân nhân",
    description: "Dành cho bố, ông bà và người thân muốn tham gia hỗ trợ chăm sóc mẹ bé.",
    tag: "Nhóm 4",
    icon: <FamilyIcon />,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfFlZ1BaJu-qHi2pgfLksPc6dcveB6RHt6MliVWl5Va_lyvrw/viewform?usp=publish-editor",
    accentClass: styles.family,
    buttonLabel: "Mở khảo sát"
  }
];

function SurveyCard({ group }: { group: GroupCard }) {
  return (
    <a className={`${styles.card} ${group.accentClass}`} href={group.url} target="_blank" rel="noreferrer">
      <div className={styles.cardTop}>
        <div className={styles.cardIcon}>
          {group.icon}
        </div>
        <div className={styles.cardMeta}>
          <span className={styles.cardTag}>{group.tag}</span>
          <h2 className={styles.cardTitle}>{group.name}</h2>
        </div>
      </div>
      <p className={styles.cardText}>{group.description}</p>
      <span className={styles.cardButton}>
        <span>{group.buttonLabel}</span>
        <span className={styles.externalIcon}>
          <ExternalIcon />
        </span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.blobOne} />
      <div className={styles.blobTwo} />

      <section className={styles.shell}>
        <section className={styles.content} id="groups">
          <div className={styles.gridPanel}>
            <div className={styles.cardGrid}>
              {groups.map((group) => (
                <SurveyCard key={group.tag} group={group} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}