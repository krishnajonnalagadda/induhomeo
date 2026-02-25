export type ConditionCategory = "women" | "children";

export type Condition = {
  slug: string;
  title: string;
  category: ConditionCategory;
  metaDescription: string;
  summary: string;
  whatIsIt: string;
  howWeHelp: string;
  whenToConsult: string;
};

const conditions: Condition[] = [
  {
    slug: "pcod-pcos",
    title: "PCOD / PCOS",
    category: "women",
    metaDescription:
      "PCOD/PCOS homeopathy treatment at IH Clinic, Tirupati. Individualised care for menstrual regularity and hormonal balance.",
    summary:
      "Polycystic ovary syndrome (PCOS) affects many women of reproductive age, causing irregular periods, hormonal imbalance, and often infertility. Homeopathy aims to restore menstrual rhythm and hormonal balance.",
    whatIsIt:
      "PCOD (Polycystic Ovary Disease) or PCOS (Polycystic Ovary Syndrome) is a hormonal disorder characterised by irregular menstrual cycles, elevated androgens, and sometimes multiple small cysts on the ovaries. It can lead to infertility, weight gain, acne, and hair growth. Prevalence in India is high among women of reproductive age.",
    howWeHelp:
      "Individualised homeopathic treatment addresses the whole person—hormonal imbalance, insulin resistance, and emotional stress. Case studies and clinical experience suggest improvement in menstrual regularity, hormonal markers, and conception in many women. Treatment is gentle and non-suppressive.",
    whenToConsult:
      "If you have irregular or painful periods, difficulty conceiving, acne or hair fall linked to hormones, or a diagnosis of PCOD/PCOS and wish to explore homeopathy alongside or instead of conventional options.",
  },
  {
    slug: "infertility",
    title: "Infertility",
    category: "women",
    metaDescription:
      "Homeopathy for infertility at IH Clinic, Tirupati. Gentle, individualised care for couples trying to conceive.",
    summary:
      "Infertility affects many couples. Homeopathy treats the individual—addressing hormonal, structural, and emotional factors that may contribute to subfertility.",
    whatIsIt:
      "Infertility is defined as the inability to conceive after a year of regular unprotected intercourse. Causes can be ovulatory (e.g. PCOS), tubal, male factor, or unexplained. Women with PCOS often have reduced ovulation frequency.",
    howWeHelp:
      "Homeopathy does not replace necessary medical evaluation (e.g. semen analysis, tubal patency). It can support hormonal balance, regularise cycles, and address stress and general health. Individualised remedies are chosen after detailed case-taking.",
    whenToConsult:
      "If you have been trying to conceive, have irregular cycles or known hormonal issues, or wish to support your body with gentle, non-invasive care alongside or before other treatments.",
  },
  {
    slug: "recurrent-infections-children",
    title: "Recurrent Infections in Children",
    category: "children",
    metaDescription:
      "Recurrent colds and coughs in children—homeopathy at IH Clinic, Tirupati. Fewer infections, fewer antibiotics.",
    summary:
      "Recurrent respiratory infections are common in school-going children. Homeopathy can help reduce frequency and severity and support immunity.",
    whatIsIt:
      "Recurrent colds, coughs, and upper respiratory infections in children lead to missed school and repeated antibiotic use. Causes include immature immunity, exposure in group settings, and sometimes underlying allergies.",
    howWeHelp:
      "Constitutional homeopathy aims to strengthen the child's resistance. Studies in children with recurrent respiratory infections have shown reduction in episode frequency and school absenteeism with individualised homeopathic treatment. No adverse events were reported in these studies.",
    whenToConsult:
      "If your child has frequent colds, coughs, or fever and you wish to reduce reliance on antibiotics and support long-term immunity with gentle care.",
  },
  {
    slug: "tonsillitis-adenoids",
    title: "Tonsillitis & Adenoids",
    category: "children",
    metaDescription:
      "Tonsillitis and adenoids in children—homeopathy at IH Clinic, Tirupati. Avoid surgery where possible.",
    summary:
      "Chronic or recurrent tonsillitis and enlarged adenoids are common in children. Homeopathy can reduce frequency of attacks and sometimes avoid the need for surgery.",
    whatIsIt:
      "Tonsillitis is inflammation of the tonsils; adenoids are lymphoid tissue at the back of the nose. Recurrent infection or enlargement can cause sore throat, snoring, mouth breathing, and ear problems.",
    howWeHelp:
      "Individualised homeopathic treatment has been used to reduce the frequency and severity of tonsillitis and to improve adenoidal enlargement in many children. In some cases, surgery has been avoided. Treatment is gentle and safe.",
    whenToConsult:
      "If your child has recurrent tonsillitis, enlarged tonsils or adenoids, or has been advised surgery and you wish to explore a gentle alternative first.",
  },
  {
    slug: "autism-asd",
    title: "Autism (ASD)",
    category: "children",
    metaDescription:
      "Homeopathy for autism (ASD) in children at IH Clinic, Tirupati. Support for behaviour, communication, and wellbeing.",
    summary:
      "Autism spectrum disorder (ASD) affects communication, behaviour, and sensory processing. Homeopathy is used as a complementary support to improve behaviour, communication, and overall wellbeing.",
    whatIsIt:
      "ASD is a developmental condition characterised by differences in social communication, repetitive behaviours, and often sensory sensitivities. There is no single medical “cure”; management focuses on therapy and support.",
    howWeHelp:
      "Individualised homeopathy is used alongside speech, occupational, and behavioural therapies. Indian studies report improvements in communication, socialisation, sensory awareness, and behaviour in many children. Treatment is tailored to each child.",
    whenToConsult:
      "If your child has been diagnosed with ASD or shows signs of delayed communication or social interaction and you wish to add gentle, individualised homeopathic support to their care plan.",
  },
  {
    slug: "thyroid",
    title: "Thyroid Disorders",
    category: "women",
    metaDescription:
      "Thyroid (hypothyroidism, hyperthyroidism) homeopathy at IH Clinic, Tirupati. Women-focused care.",
    summary:
      "Thyroid disorders, especially hypothyroidism, are more common in women. Homeopathy can support symptom relief and hormonal balance.",
    whatIsIt:
      "Hypothyroidism (underactive thyroid) causes fatigue, weight gain, cold sensitivity, and often affects women more than men. Hyperthyroidism (overactive) causes weight loss, palpitations, and anxiety.",
    howWeHelp:
      "Homeopathic treatment is individualised. It can help with symptom relief and, in some cases, improvement in TSH levels. It does not replace thyroid hormone replacement when medically indicated; it can be used alongside or in mild cases.",
    whenToConsult:
      "If you have thyroid imbalance, are on medication but still symptomatic, or wish to explore gentle support for your thyroid and general wellbeing.",
  },
  {
    slug: "pregnancy-postpartum",
    title: "Pregnancy & Postpartum",
    category: "women",
    metaDescription:
      "Pregnancy and postpartum homeopathy at IH Clinic, Tirupati. Safe support for nausea, labour, and recovery.",
    summary:
      "Homeopathy is considered safe in pregnancy and postpartum. We support nausea, labour, recovery, and lactation.",
    whatIsIt:
      "Pregnancy and the postpartum period bring physical and emotional changes. Common issues include nausea, anxiety, labour support, postpartum recovery, and breastfeeding difficulties.",
    howWeHelp:
      "Gentle remedies can support nausea, anxiety, and labour. Postpartum, homeopathy can help with healing, mood (including postpartum low mood), and lactation issues such as engorgement or mastitis. Remedies are highly diluted and used under professional guidance.",
    whenToConsult:
      "If you are pregnant or postpartum and wish to use gentle, evidence-informed homeopathic support for common complaints.",
  },
  {
    slug: "acne-hair-fall",
    title: "Acne & Hair Fall (Hormonal)",
    category: "women",
    metaDescription:
      "Hormonal acne and hair fall homeopathy at IH Clinic, Tirupati. Address root causes.",
    summary:
      "Hormonal acne and hair fall in women are often linked to PCOD, thyroid, or stress. Homeopathy treats from within.",
    whatIsIt:
      "Acne and hair loss in women can be driven by hormones (androgens, thyroid), stress, or diet. They are common in PCOS and perimenopause.",
    howWeHelp:
      "Individualised homeopathy addresses hormonal balance and stress rather than only local symptoms. Case reports show improvement in acne and hair fall when constitutional treatment is combined with lifestyle support.",
    whenToConsult:
      "If you have persistent acne or hair fall that you suspect is hormonal or stress-related and wish for a holistic approach.",
  },
  {
    slug: "asthma-allergies-children",
    title: "Asthma & Allergies (Children)",
    category: "children",
    metaDescription:
      "Asthma and allergies in children—homeopathy at IH Clinic, Tirupati. Gentle support for breathing and immunity.",
    summary:
      "Asthma and allergies in children can be supported with homeopathy to reduce frequency and severity of attacks.",
    whatIsIt:
      "Asthma is chronic inflammation of the airways; allergies involve an overactive immune response to allergens. Both are common in children and can affect sleep, school, and activity.",
    howWeHelp:
      "Homeopathy aims to reduce susceptibility and severity of attacks. Treatment is individualised and can be used alongside prescribed inhalers when needed. Do not stop prescribed asthma medication without medical advice.",
    whenToConsult:
      "If your child has asthma or allergies and you wish to add gentle, long-term support to reduce reliance on rescue medication (under medical supervision).",
  },
  {
    slug: "adhd-behavioural",
    title: "ADHD & Behavioural Issues",
    category: "children",
    metaDescription:
      "ADHD and behavioural issues in children—homeopathy at IH Clinic, Tirupati. Non-drug support option.",
    summary:
      "ADHD and behavioural issues in children are often managed with medication. Homeopathy offers a complementary, non-drug option for some families.",
    whatIsIt:
      "ADHD involves inattention, hyperactivity, and impulsivity. Oppositional defiant disorder (ODD) and other behavioural issues can co-occur. Management typically includes behavioural strategies and sometimes medication.",
    howWeHelp:
      "Individualised homeopathy may help with focus, behaviour, and emotional regulation in some children. It is used as a complementary approach. Evidence is mixed; we do not claim to replace necessary medical or educational support.",
    whenToConsult:
      "If your child has ADHD or behavioural difficulties and you wish to explore gentle, individualised homeopathic support alongside other interventions.",
  },
];

export function getAllConditions(): Condition[] {
  return conditions;
}

export function getConditionsByCategory(
  category: ConditionCategory
): Condition[] {
  return conditions.filter((c) => c.category === category);
}

export function getConditionBySlug(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}

export function getConditionSlugs(): string[] {
  return conditions.map((c) => c.slug);
}
