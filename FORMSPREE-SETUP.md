# Formular-E-Mails mit Formspree

Das Kontaktformular nutzt **Formspree** – ein kostenloser Dienst, der Formulare per E-Mail an Sie weiterleitet (kein eigener E-Mail-Server, kein CORS-Problem).

## Einrichtung (einmalig)

1. **Anmelden:** Gehen Sie auf [https://formspree.io](https://formspree.io) und melden Sie sich mit **wenke.leon06@gmail.com** an (kostenlos).

2. **Neues Formular:** Klicken Sie auf „New Form“ und geben Sie z. B. „Kontakt Fußbodenheizung“ als Namen ein. Als E-Mail für Benachrichtigungen **wenke.leon06@gmail.com** eintragen.

3. **Form-ID kopieren:** Formspree zeigt Ihnen eine URL wie  
   `https://formspree.io/f/xyzabcde`  
   Die Form-ID ist der Teil nach `/f/` – hier also **xyzabcde**.

4. **In die Website eintragen:** Öffnen Sie **kontakt.html** und suchen Sie im Inline-Skript (vor `</body>`) die Zeile  
   `var FORMSPREE_ID = 'YOUR_FORMSPREE_ID';`  
   Ersetzen Sie **YOUR_FORMSPREE_ID** durch Ihre echte Form-ID, z. B.  
   `var FORMSPREE_ID = 'xyzabcde';`

Fertig. Ab dann landen alle Formular-Absendungen in Ihrem Posteingang unter wenke.leon06@gmail.com.

## Optional: Daten zusätzlich an n8n senden

Wenn Sie die Anfragen auch in n8n verarbeiten möchten:

1. In Formspree: Formular öffnen → **Integrations** bzw. **Webhooks**.
2. Webhook-URL eintragen:  
   `https://n8n.srv881499.hstgr.cloud/webhook/b31a0cd3-264e-4e09-9c45-c1f64f695d25`
3. Formspree sendet jede Absendung per POST an diese URL (von Formspree-Servern aus, ohne CORS).
