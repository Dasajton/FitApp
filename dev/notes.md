# Planung Backend

## Datenbank MongoDb

**Benutzerdaten:**

- _id: ID des Benutzers (automatisch generiert)
- username: Benutzername
- name: Echter Name
- email: Email-Adresse
- password: Passwort (verschlüsselt)
- created_at: Erstellungsdatum
- updated_at: Aktualisierungsdatum

**Trainingspläne:**

- _id: ID des Trainingsplans (automatisch generiert)
- user_id: ID des Benutzers, dem der Trainingsplan gehört
- name: Name des Trainingsplans
- days: Anzahl der Trainingstage im Trainingsplan
- created_at: Erstellungsdatum
- updated_at: Aktualisierungsdatum

**Trainingspläne für einzelne Tage:**

- _id: ID des Trainingsplans für einen Tag (automatisch generiert)
- plan_id: ID des Trainingsplans, zu dem dieser Tag gehört
- day: Tag des Trainingsplans (z.B. Tag 1, Tag 2, usw.)
- exercises: Array von Übungen für diesen Tag

**Übungen:**

- _id: ID der Übung (automatisch generiert)
- name: Name der Übung
- max_weight: Maximales Gewicht für 10 Wiederholungen
- created_at: Erstellungsdatum
- updated_at: Aktualisierungsdatum

**Trainingsprotokolle:**

- _id: ID des Trainingsprotokolls (automatisch generiert)
- user_id: ID des Benutzers, der das Protokoll erstellt hat
- plan_id: ID des Trainingsplans
- exercise_id: ID der Übung
- set: Satznummer (z.B. 1, 2, 3, usw.)
- weight: Gewicht für diesen Satz
- reps: Anzahl der Wiederholungen für diesen Satz
- created_at: Erstellungsdatum
- updated_at: Aktualisierungsdatum