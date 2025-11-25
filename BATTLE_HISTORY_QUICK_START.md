# Battle History - Quick Start Guide

## What's New? 🎉

You can now track your guild war battles with victory/defeat records!

## How to Use

### 1. Pick a Team to Fight
1. Go to **Guild War** page
2. Click **Find Team** on any enemy team (e.g., Team 25)
3. You'll see **📜 Previous Battles** section at the top
4. Select your heroes and search for members
5. Click **Pick This Team** on a member
6. ✅ Battle saved to history!

### 2. Record Battle Results
1. After fighting, go back to **Guild War**
2. Click **Find Team** on the same enemy
3. See your previous battle in **📜 Previous Battles**
4. Click the radio button:
   - **✅ Win** - You won!
   - **❌ Loss** - You lost
5. Result saves automatically

### 3. View History
- Each enemy team shows only battles against that specific enemy
- Most recent battles appear first
- See who you picked, when, and the result

## Visual Guide

```
📜 Previous Battles
┌──────────────────────────────────────┐
│ PlayerName123        Jan 15, 2025    │
│ [✅ Win] [❌ Loss]                    │
│ Hero1, Hero2, Hero3                  │
│ ─────────────────────────────────    │
│ AnotherPlayer        Jan 14, 2025    │
│ [✅ Win] [❌ Loss]                    │
│ Hero4, Hero5, Hero6                  │
└──────────────────────────────────────┘
```

## Color Coding

- **Green border** = Victory ✅
- **Red border** = Defeat ❌
- **Gray border** = Pending (not recorded yet) ⏳

## Benefits

✅ **Track Performance**: See which strategies work
✅ **Remember Battles**: Know who you fought before
✅ **Make Better Decisions**: Learn from past attempts
✅ **Guild Coordination**: Share what works

## Example Workflow

**Day 1 - Guild War Starts:**
1. Open Team 25 (Outer Bailey 3)
2. Pick PlayerA to fight
3. Battle saved as "Pending"

**After Battle:**
1. Open Team 25 again
2. See PlayerA in history
3. Click ✅ Win (you won!)
4. Green border confirms victory

**Day 2 - Try Again:**
1. Open Team 25
2. See PlayerA marked as Victory
3. Try PlayerB this time
4. Record result after battle

**Day 3 - Review:**
1. Open Team 25
2. See both battles:
   - PlayerA: ✅ Victory
   - PlayerB: ❌ Defeat
3. Decide to use PlayerA's strategy again

## Tips

💡 **Record results immediately** after battles so you don't forget

💡 **Check history before picking** to avoid repeating failed strategies

💡 **Try different members** to find the best matchup

💡 **Share victories** with guild to help others

## Testing It Out

1. **Server is running** on http://localhost:3000
2. **Login** to your account
3. **Go to Guild War** page
4. **Click Find Team** on any enemy
5. **Pick a team** and see it appear in history
6. **Mark the result** with radio buttons

## What Gets Saved

For each battle:
- ✅ Enemy team number and zone
- ✅ Player you picked
- ✅ Their heroes (with stars and rings)
- ✅ Battle date
- ✅ Result (Win/Loss/Pending)

## Need Help?

- Check `BATTLE_HISTORY_FEATURE.md` for full documentation
- Open browser console (F12) to see debug logs
- Battle history is saved per enemy team
- Each pick creates a new history entry

---

**Ready to track your victories!** 🎮⚔️
