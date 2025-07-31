import React, { useState } from 'react';
import { Play, Copy, RotateCcw, Sparkles, Target, Globe } from 'lucide-react';
import { mockData } from '../data/mock';

const LiveDemo = () => {
  const { demoContent } = mockData;
  const [selectedPrompt, setSelectedPrompt] = useState(demoContent.prompts[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setShowOutput(false);
    
    // Simulate AI generation delay
    setTimeout(() => {
      const result = demoContent.sampleOutputs[selectedPrompt];
      setOutput(result);
      setIsGenerating(false);
      setShowOutput(true);
    }, 2000);
  };

  const copyToClipboard = () => {
    if (output.content) {
      navigator.clipboard.writeText(output.content);
    }
  };

  const resetDemo = () => {
    setOutput('');
    setShowOutput(false);
    setIsGenerating(false);
  };

  return (
    <section id="demo" className="py-16 bg-page">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            See AI Writing in Action
          </h2>
          <p className="body-large text-secondary max-w-2xl mx-auto">
            Try our AI writing assistant with these sample prompts. See how quickly it generates high-quality content.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Demo Interface */}
          <div className="voice-card accent-purple mb-8">
            <div className="space-y-6">
              {/* Prompt Selection */}
              <div>
                <label className="body-small text-secondary mb-3 block">
                  Choose a writing prompt:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {demoContent.prompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPrompt(prompt)}
                      className={`p-3 rounded-lg text-left transition-all ${
                        selectedPrompt === prompt
                          ? 'bg-primary text-white'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    >
                      <span className="body-small">{prompt}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <div className="flex gap-3">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className={`btn-primary flex items-center gap-2 ${
                    isGenerating ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="h-4 w-4 animate-pulse" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      Generate Content
                    </>
                  )}
                </button>
                <button
                  onClick={resetDemo}
                  className="btn-secondary"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Output Display */}
          {(showOutput || isGenerating) && (
            <div className="voice-card accent-blue">
              <div className="flex items-center justify-between mb-4">
                <h3 className="heading-3">Generated Content</h3>
                {showOutput && (
                  <button
                    onClick={copyToClipboard}
                    className="btn-secondary !p-2"
                    title="Copy to clipboard"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                )}
              </div>

              {isGenerating ? (
                <div className="space-y-3">
                  <div className="h-4 bg-white/30 rounded animate-pulse"></div>
                  <div className="h-4 bg-white/30 rounded animate-pulse w-4/5"></div>
                  <div className="h-4 bg-white/30 rounded animate-pulse w-3/5"></div>
                </div>
              ) : showOutput && output ? (
                <div className="space-y-4">
                  <h4 className="heading-3 text-primary">{output.title}</h4>
                  <div className="body-medium text-secondary whitespace-pre-line">
                    {output.content}
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {/* Demo Features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent-orange-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="heading-3 mb-2">Instant Results</h4>
              <p className="body-small text-secondary">
                Generate content in seconds, not hours
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent-green-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="heading-3 mb-2">Brand Voice</h4>
              <p className="body-small text-secondary">
                Matches your unique writing style
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent-pink-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-pink-600" />
              </div>
              <h4 className="heading-3 mb-2">Multi-Purpose</h4>
              <p className="body-small text-secondary">
                Works for any type of content
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;