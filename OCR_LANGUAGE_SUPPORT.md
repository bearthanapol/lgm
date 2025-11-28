# OCR Language Support

## Current Status

The Hero Recognition Tool currently uses **Tesseract.js** for OCR (Optical Character Recognition).

### Supported Languages (Current):
- ✅ **English** - Fully supported and configured

### Potential Language Support:
- ⚠️ **Thai** - Can be added (requires configuration)
- ⚠️ **Korean** - Can be added (requires configuration)
- ⚠️ **Chinese** - Can be added (requires configuration)
- ⚠️ **Japanese** - Can be added (requires configuration)

## How to Add Thai/Korean Support

### Option 1: Add Language Data (Recommended for Production)

1. **Download Language Data Files:**
   - Thai: `tha.traineddata` (~2-3 MB)
   - Korean: `kor.traineddata` (~4-5 MB)
   - From: https://github.com/naptha/tessdata

2. **Place in Project:**
   ```
   public/tessdata/
   ├── eng.traineddata
   ├── tha.traineddata
   └── kor.traineddata
   ```

3. **Update OCR Configuration:**
   ```javascript
   // In your OCR processing code
   const worker = await createWorker({
     langPath: '/tessdata',
     lang: 'eng+tha+kor', // Multiple languages
   });
   ```

### Option 2: Use CDN (Easier but Slower)

```javascript
const worker = await createWorker({
  langPath: 'https://tessdata.projectnaptha.com/4.0.0',
  lang: 'eng+tha+kor',
});
```

## Trade-offs

### Adding More Languages:

**Pros:**
- ✅ Can recognize Thai/Korean hero names
- ✅ Better for international users
- ✅ More accurate for non-English text

**Cons:**
- ❌ Larger file downloads (2-5 MB per language)
- ❌ Slower processing time
- ❌ May reduce accuracy for mixed languages
- ❌ More memory usage

## Current Implementation

The current OCR feature is **placeholder/basic** and would need:

1. **Backend OCR Processing** (server/teamRoutes.js)
   - Currently not fully implemented
   - Needs Tesseract.js integration
   - Needs image processing logic

2. **Frontend Upload Handler** (public/js/pages.js)
   - ✅ Now implemented (`handleTeamUpload`)
   - Sends image to backend
   - Displays results

3. **Hero Name Matching**
   - Needs fuzzy matching algorithm
   - Match OCR text to hero database
   - Handle typos and variations

## Recommendation

### For English-Only Game:
- Keep current English-only setup
- Faster and more accurate

### For Thai/Korean Support:
1. Add language data files
2. Configure multi-language OCR
3. Test accuracy with real screenshots
4. May need manual correction UI

### Alternative Approach:
Instead of OCR, consider:
- **Manual hero selection** (current working method)
- **Barcode/QR code** on screenshots
- **Image recognition** (ML model) instead of OCR
- **API integration** if game provides one

## Current Workaround

Users can:
1. Upload screenshot (visual reference)
2. **Manually type hero names** (most reliable)
3. Set star levels manually
4. Save team

This is actually **more reliable** than OCR for:
- Mixed languages
- Stylized fonts
- Low quality screenshots
- Special characters

## Future Enhancement

If OCR is critical, consider:
1. **Cloud OCR Services:**
   - Google Cloud Vision API
   - AWS Textract
   - Azure Computer Vision
   - More accurate but costs money

2. **Custom ML Model:**
   - Train on game screenshots
   - Better accuracy for game-specific fonts
   - Requires significant development

3. **Hybrid Approach:**
   - OCR for initial detection
   - User confirmation/correction
   - Learn from corrections

## Conclusion

**Current Status:** OCR is basic/placeholder
**Recommendation:** Manual entry is more reliable for now
**Future:** Can add Thai/Korean if needed, but requires development effort

For most users, **manual hero selection** from the database is:
- ✅ Faster
- ✅ More accurate
- ✅ Works for all languages
- ✅ No additional downloads
