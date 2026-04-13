import { useState, useRef, useCallback } from "react";
import { Upload, Sparkles, RotateCcw, Download, ChevronRight, ImageIcon, Loader2, X } from "lucide-react";

const EXAMPLE_PROMPTS = [
  "Add dark quartz countertops, white shaker cabinets, and stainless steel appliances",
  "Tile the shower with large-format gray marble tiles and add a frameless glass door",
  "Build a large pressure-treated wood deck with stairs and a railing system",
  "Refinish the floors with dark hardwood and add recessed lighting",
  "Paint the walls a warm greige, add crown molding and wainscoting panels",
  "Pour a new concrete patio with a stamped finish and add outdoor lighting",
];

export function RemodelVisualizer() {
  const [dragOver, setDragOver] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState("");
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAfter, setShowAfter] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file (JPG, PNG, WEBP, etc.)");
      return;
    }
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setResultUrl(null);
    setError(null);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const clearImage = () => {
    setPreviewUrl(null);
    setImageFile(null);
    setResultUrl(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleGenerate = async () => {
    if (!imageFile || !prompt.trim()) return;
    setLoading(true);
    setError(null);
    setResultUrl(null);

    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("prompt", prompt.trim());

      const res = await fetch("/api/visualize", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `Server error (${res.status})`);
      }

      const data = await res.json();
      const url = `data:image/png;base64,${data.image}`;
      setResultUrl(url);
      setShowAfter(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!resultUrl) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = "tb-remodel-visualization.png";
    a.click();
  };

  const canGenerate = imageFile && prompt.trim().length > 0 && !loading;

  return (
    <section id="visualizer" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f59e0b08_0%,_transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-bold uppercase tracking-widest">AI-Powered</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
            Visualize Your{" "}
            <span className="text-primary">Dream Remodel</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Upload a photo of your space, describe what you want — and watch AI bring your vision to life before T&amp;B makes it real.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left: Input */}
          <div className="space-y-5">

            {/* Upload Zone */}
            <div className="rounded-2xl border border-border overflow-hidden bg-card">
              <div className="px-5 py-4 border-b border-border">
                <h3 className="font-display text-lg font-bold text-foreground tracking-wide">
                  Step 1 — Upload Your Photo
                </h3>
                <p className="text-sm text-foreground/50 mt-0.5">
                  Kitchen, bathroom, backyard, living room — any space works
                </p>
              </div>

              {previewUrl ? (
                <div className="relative">
                  <img
                    src={previewUrl}
                    alt="Uploaded space"
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={clearImage}
                    className="absolute top-3 right-3 bg-black/70 hover:bg-black text-white rounded-full p-1.5 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {imageFile?.name}
                  </div>
                </div>
              ) : (
                <div
                  className={`relative cursor-pointer transition-colors ${dragOver ? "bg-primary/10" : "bg-card hover:bg-primary/5"}`}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors ${dragOver ? "bg-primary/20" : "bg-primary/10"}`}>
                      <Upload className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-foreground/80 font-semibold mb-1">
                      {dragOver ? "Drop it here!" : "Drop your photo here"}
                    </p>
                    <p className="text-foreground/40 text-sm mb-4">or click to browse</p>
                    <div className="flex gap-2 text-xs text-foreground/30">
                      <span className="bg-border/50 px-2 py-0.5 rounded">JPG</span>
                      <span className="bg-border/50 px-2 py-0.5 rounded">PNG</span>
                      <span className="bg-border/50 px-2 py-0.5 rounded">WEBP</span>
                      <span className="bg-border/50 px-2 py-0.5 rounded">up to 10MB</span>
                    </div>
                  </div>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileInput}
              />
            </div>

            {/* Prompt */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-5 py-4 border-b border-border">
                <h3 className="font-display text-lg font-bold text-foreground tracking-wide">
                  Step 2 — Describe Your Vision
                </h3>
                <p className="text-sm text-foreground/50 mt-0.5">
                  Be specific — materials, colors, and finishes give the best results
                </p>
              </div>
              <div className="p-5">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. Add dark quartz countertops, white shaker cabinets, and a tile backsplash..."
                  rows={4}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />

                {/* Example prompts */}
                <div className="mt-3">
                  <p className="text-xs text-foreground/40 mb-2 uppercase tracking-widest font-semibold">Try an example:</p>
                  <div className="flex flex-wrap gap-2">
                    {EXAMPLE_PROMPTS.slice(0, 3).map((ex) => (
                      <button
                        key={ex}
                        onClick={() => setPrompt(ex)}
                        className="text-xs bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg px-3 py-1.5 transition-colors text-left leading-snug"
                      >
                        {ex.length > 45 ? ex.slice(0, 45) + "…" : ex}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-display font-bold text-lg tracking-wide transition-all duration-200 ${
                canGenerate
                  ? "bg-primary hover:bg-primary/90 text-black shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-100"
                  : "bg-border text-foreground/30 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating Your Vision…
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate AI Visualization
                  <ChevronRight className="w-5 h-5" />
                </>
              )}
            </button>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                {error}
              </div>
            )}
          </div>

          {/* Right: Result */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-foreground tracking-wide">
                Step 3 — See the Transformation
              </h3>
              {resultUrl && (
                <div className="flex items-center gap-2">
                  <div className="flex rounded-lg overflow-hidden border border-border text-xs font-bold">
                    <button
                      onClick={() => setShowAfter(false)}
                      className={`px-3 py-1.5 transition-colors ${!showAfter ? "bg-primary text-black" : "text-foreground/50 hover:text-foreground"}`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => setShowAfter(true)}
                      className={`px-3 py-1.5 transition-colors ${showAfter ? "bg-primary text-black" : "text-foreground/50 hover:text-foreground"}`}
                    >
                      After
                    </button>
                  </div>
                </div>
              )}
            </div>

            {resultUrl ? (
              <div className="relative">
                <img
                  src={showAfter ? resultUrl : previewUrl!}
                  alt={showAfter ? "AI remodeling visualization" : "Original photo"}
                  className="w-full object-contain max-h-[500px]"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${showAfter ? "bg-primary text-black" : "bg-black/70 text-white"}`}>
                    {showAfter ? "✦ AI Visualization" : "Original"}
                  </span>
                </div>
                <div className="p-4 flex gap-3">
                  <button
                    onClick={handleDownload}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-sm font-semibold transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button
                    onClick={() => { setResultUrl(null); }}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-border/30 hover:bg-border/60 text-foreground/60 text-sm font-semibold transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Try Again
                  </button>
                </div>
                <div className="px-5 pb-5">
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      <span className="text-primary font-bold">Like what you see?</span> Send this visualization to T&amp;B and we'll make it a reality.
                    </p>
                    <a
                      href="#contact"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      Get a Free Estimate <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ) : loading ? (
              <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                  <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-primary" />
                </div>
                <p className="text-foreground/70 font-semibold text-lg mb-2">Working the magic…</p>
                <p className="text-foreground/40 text-sm max-w-xs">
                  Our AI is crafting a photorealistic visualization of your space. This usually takes 15–30 seconds.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <ImageIcon className="w-10 h-10 text-primary/40" />
                </div>
                <p className="text-foreground/50 font-semibold mb-2">Your visualization will appear here</p>
                <p className="text-foreground/30 text-sm max-w-xs leading-relaxed">
                  Upload a photo and describe what you want — then hit Generate to see the AI transformation.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA bottom */}
        <div className="mt-12 text-center">
          <p className="text-foreground/40 text-sm">
            AI visualization is a creative preview — actual results may vary based on materials and site conditions. 
            <a href="#contact" className="text-primary hover:underline ml-1">Contact T&amp;B for an accurate assessment.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
