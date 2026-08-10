import Foundation
import Vision
import AppKit

for path in CommandLine.arguments.dropFirst() {
  guard let image = NSImage(contentsOfFile: path),
        let data = image.tiffRepresentation,
        let bitmap = NSBitmapImageRep(data: data),
        let cgImage = bitmap.cgImage else { continue }

  let request = VNRecognizeTextRequest()
  request.recognitionLevel = .accurate
  request.usesLanguageCorrection = true
  request.recognitionLanguages = ["en-US"]

  let handler = VNImageRequestHandler(cgImage: cgImage)
  try? handler.perform([request])

  print("===FRAME \(URL(fileURLWithPath: path).lastPathComponent)===")
  let observations = (request.results ?? []).sorted {
    let yDelta = $0.boundingBox.midY - $1.boundingBox.midY
    return abs(yDelta) > 0.01 ? yDelta > 0 : $0.boundingBox.minX < $1.boundingBox.minX
  }
  for observation in observations {
    if let text = observation.topCandidates(1).first?.string {
      print(text)
    }
  }
}
