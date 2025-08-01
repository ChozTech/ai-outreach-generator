
document.getElementById("outreachForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const yourName = document.getElementById("yourName").value;
    const recipientName = document.getElementById("recipientName").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const goal = document.getElementById("outreachGoal").value;

    const playbook = `
        <h2>Your Outreach Playbook</h2>
        <p><strong>Target Job Title:</strong> ${jobTitle}</p>
        <p><strong>Goal:</strong> ${goal.replace(/([A-Z])/g, ' $1')}</p>

        <h3>1. First-Touch Message</h3>
        <p>Hi ${recipientName},<br>
        My name is ${yourName} and I’m a student passionate about tech. I came across your role as a ${jobTitle} and was impressed by your journey. I’d love to connect for a short chat.</p>

        <h3>2. Follow-Up Sequence</h3>
        <ul>
            <li><strong>+2 days:</strong> "Just checking back in—I’d really appreciate the chance to connect and learn from your experience."</li>
            <li><strong>+5 days:</strong> "I came across [recent company/project/update] and it made me even more interested in your team. Would love to hear about it!"</li>
            <li><strong>+8 days:</strong> "No worries if now isn’t a good time. I’ll keep following your work—thanks either way!"</li>
        </ul>

        <h3>3. Objection Handling</h3>
        <p><strong>"We’re not hiring right now."</strong><br>Totally understand—I’m not necessarily looking for a job right now, just trying to learn and build connections.</p>
        <p><strong>"I don’t have time."</strong><br>I get it! Even a quick resource or message reply would mean a lot.</p>

        <h3>4. Talk Track (Phone)</h3>
        <p>"Hi ${recipientName}, this is ${yourName}. I’ll be brief—I’m a student interested in tech and was hoping to learn how you got your start. Would you have a few minutes to share your path?"</p>
    `;

    document.getElementById("playbookOutput").innerHTML = playbook;
});
